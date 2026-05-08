const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
  word: { type: String, required: true },
  emoji: { type: String, required: true },
  videoUrl: { type: String, default: null },
  imageUrl: { type: String, default: null },
  description: { type: String, default: '' },
  options: [{ type: String }]
});

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El titulo es requerido'],
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  module: {
    type: Number,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  emoji: {
    type: String,
    default: '📖'
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  signs: [signSchema],
  xpReward: {
    type: Number,
    default: 50
  },
  totalExercises: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lesson', lessonSchema);
