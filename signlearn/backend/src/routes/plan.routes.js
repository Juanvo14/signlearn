const express = require('express');
const { upgradeToPremium, downgradToFree, getPlans } = require('../controllers/plan.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', protect, getPlans);
router.post('/upgrade', protect, upgradeToPremium);
router.post('/downgrade', protect, downgradToFree);

module.exports = router;
