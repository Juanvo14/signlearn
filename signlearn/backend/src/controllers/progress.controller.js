const Progress = require('../models/Progress');
const Lesson = require('../models/Lesson');
const User = require('../models/User');

const submitAnswer = async (req, res) => {
  try {
    const { lessonId, correct } = req.body;
    const user = req.user;

    // Check daily limit for free users
    if (!user.canPractice()) {
      return res.status(403).json({
        error: 'Alcanzaste el limite diario de 5 practicas.',
        limitReached: true,
        requiresUpgrade: true
      });
    }

    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ error: 'Leccion no encontrada.' });
    }

    // Update daily practice count
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastDate = user.dailyPracticeCount.date
      ? new Date(user.dailyPracticeCount.date)
      : null;

    if (!lastDate || lastDate < today) {
      user.dailyPracticeCount.count = 1;
      user.dailyPracticeCount.date = today;
    } else {
      user.dailyPracticeCount.count += 1;
    }

    // Update or create progress
    let progress = await Progress.findOne({ user: user._id, lesson: lessonId });
    if (!progress) {
      progress = new Progress({ user: user._id, lesson: lessonId });
    }

    progress.totalAnswers += 1;
    if (correct) progress.correctAnswers += 1;
    progress.score = Math.round((progress.correctAnswers / progress.totalAnswers) * 100);
    progress.status = 'in_progress';
    progress.attempts += 1;

    // Mark completed if score >= 80% with at least 5 answers
    if (progress.totalAnswers >= 5 && progress.score >= 80) {
      if (progress.status !== 'completed') {
        progress.status = 'completed';
        progress.completedAt = new Date();
        user.xp += lesson.xpReward;
        user.updateLevel();
      }
    }

    // Update streak
    user.updateStreak();

    await Promise.all([progress.save(), user.save()]);

    res.json({
      correct,
      progress: {
        status: progress.status,
        score: progress.score,
        correctAnswers: progress.correctAnswers,
        totalAnswers: progress.totalAnswers
      },
      user: {
        xp: user.xp,
        level: user.level,
        streak: user.streak,
        dailyPracticeCount: user.dailyPracticeCount
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar progreso.' });
  }
};

const getMyProgress = async (req, res) => {
  try {
    const progressList = await Progress.find({ user: req.user._id })
      .populate('lesson', 'title emoji module')
      .sort({ updatedAt: -1 });

    const stats = {
      totalCompleted: progressList.filter(p => p.status === 'completed').length,
      totalStarted: progressList.length,
      averageScore: progressList.length
        ? Math.round(progressList.reduce((sum, p) => sum + p.score, 0) / progressList.length)
        : 0
    };

    res.json({ progress: progressList, stats });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener progreso.' });
  }
};

module.exports = { submitAnswer, getMyProgress };
