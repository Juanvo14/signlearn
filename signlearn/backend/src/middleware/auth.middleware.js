const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No autorizado. Inicia sesion.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado.' });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Sesion expirada. Inicia sesion de nuevo.' });
    }
    return res.status(401).json({ error: 'Token invalido.' });
  }
};

const requirePremium = (req, res, next) => {
  if (req.user.plan !== 'premium') {
    return res.status(403).json({
      error: 'Contenido exclusivo Premium.',
      requiresUpgrade: true
    });
  }
  next();
};

module.exports = { protect, requirePremium };
