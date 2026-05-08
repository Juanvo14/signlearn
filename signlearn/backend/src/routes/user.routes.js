const express = require('express');
const { protect } = require('../middleware/auth.middleware');
const User = require('../models/User');

const router = express.Router();

router.get('/stats', protect, async (req, res) => {
  try {
    const user = req.user;
    res.json({
      xp: user.xp,
      level: user.level,
      streak: user.streak,
      plan: user.plan,
      dailyPracticeCount: user.dailyPracticeCount,
      dailyLimit: user.plan === 'free' ? 5 : null,
      remainingPractices: user.plan === 'free'
        ? Math.max(0, 5 - (user.dailyPracticeCount.count || 0))
        : null
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estadisticas.' });
  }
});

module.exports = router;
