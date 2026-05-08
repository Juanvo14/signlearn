const express = require('express');
const { body } = require('express-validator');
const { register, login, getMe } = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/register', [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Nombre entre 2 y 50 caracteres'),
  body('email').isEmail().normalizeEmail().withMessage('Email invalido'),
  body('password').isLength({ min: 6 }).withMessage('Contrasena minimo 6 caracteres')
], register);

router.post('/login', [
  body('email').isEmail().normalizeEmail().withMessage('Email invalido'),
  body('password').notEmpty().withMessage('Contrasena requerida')
], login);

router.get('/me', protect, getMe);

module.exports = router;
