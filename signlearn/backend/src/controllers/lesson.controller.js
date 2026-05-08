const Lesson = require('../models/Lesson');
const Progress = require('../models/Progress');

const getLessons = async (req, res) => {
  try {
    const isPremium = req.user.plan === 'premium';

    const lessons = await Lesson.find({ isActive: true })
      .sort({ module: 1, order: 1 })
      .select('-signs');

    // Get user progress for all lessons
    const progressList = await Progress.find({ user: req.user._id });
    const progressMap = {};
    progressList.forEach(p => {
      progressMap[p.lesson.toString()] = p;
    });

    const result = lessons.map(lesson => {
      const progress = progressMap[lesson._id.toString()] || null;
      const isLocked = lesson.isPremium && !isPremium;

      return {
        _id: lesson._id,
        title: lesson.title,
        description: lesson.description,
        module: lesson.module,
        order: lesson.order,
        emoji: lesson.emoji,
        isPremium: lesson.isPremium,
        isLocked,
        xpReward: lesson.xpReward,
        totalExercises: lesson.totalExercises,
        signsCount: lesson.signs ? lesson.signs.length : 0,
        progress: progress
          ? { status: progress.status, score: progress.score }
          : { status: 'not_started', score: 0 }
      };
    });

    res.json({ lessons: result });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener lecciones.' });
  }
};

const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ error: 'Leccion no encontrada.' });
    }

    if (lesson.isPremium && req.user.plan !== 'premium') {
      return res.status(403).json({
        error: 'Leccion exclusiva Premium.',
        requiresUpgrade: true
      });
    }

    res.json({ lesson });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la leccion.' });
  }
};

module.exports = { getLessons, getLessonById };
