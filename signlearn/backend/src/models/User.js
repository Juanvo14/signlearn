const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true,
    minlength: [2, 'Minimo 2 caracteres'],
    maxlength: [50, 'Maximo 50 caracteres']
  },
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Email no valido']
  },
  password: {
    type: String,
    required: [true, 'La contrasena es requerida'],
    minlength: [6, 'Minimo 6 caracteres'],
    select: false
  },
  plan: {
    type: String,
    enum: ['free', 'premium'],
    default: 'free'
  },
  xp: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  streak: {
    current: { type: Number, default: 0 },
    longest: { type: Number, default: 0 },
    lastActivityDate: { type: Date, default: null }
  },
  dailyPracticeCount: {
    count: { type: Number, default: 0 },
    date: { type: Date, default: null }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (candidate) {
  return await bcrypt.compare(candidate, this.password);
};

// Update streak logic
userSchema.methods.updateStreak = function () {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const last = this.streak.lastActivityDate
    ? new Date(this.streak.lastActivityDate)
    : null;

  if (last) {
    last.setHours(0, 0, 0, 0);
    const diff = (today - last) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      this.streak.current += 1;
    } else if (diff > 1) {
      this.streak.current = 1;
    }
  } else {
    this.streak.current = 1;
  }

  if (this.streak.current > this.streak.longest) {
    this.streak.longest = this.streak.current;
  }
  this.streak.lastActivityDate = today;
};

// XP to level
userSchema.methods.updateLevel = function () {
  this.level = Math.floor(this.xp / 1000) + 1;
};

// Check free plan daily limit (5 practices/day)
userSchema.methods.canPractice = function () {
  if (this.plan === 'premium') return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lastDate = this.dailyPracticeCount.date
    ? new Date(this.dailyPracticeCount.date)
    : null;

  if (!lastDate || lastDate < today) {
    return true;
  }
  return this.dailyPracticeCount.count < 5;
};

module.exports = mongoose.model('User', userSchema);
