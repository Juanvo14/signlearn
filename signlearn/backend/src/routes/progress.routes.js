const express = require('express');
const { submitAnswer, getMyProgress } = require('../controllers/progress.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/submit', protect, submitAnswer);
router.get('/me', protect, getMyProgress);

module.exports = router;
