// lesson.routes.js
const express = require('express');
const { getLessons, getLessonById } = require('../controllers/lesson.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', protect, getLessons);
router.get('/:id', protect, getLessonById);

module.exports = router;
