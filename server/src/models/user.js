const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true
  },
  emailId: {
    type: String,
    required: [true, 'Please provide your email-id'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    trim: true,
    minlength: 7,
    select: false
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm the password'],
    trim: true,
    select: false,
    validate: {
      validator(el) {
        return el === this.password;
      },
      message: 'Passwords do not match'
    }
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide your phone number'],
    trim: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']
  },
  userImage: {
    type: String
  }
});

// To encrypt password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  return next();
});

// Verify password
userSchema.methods.verifyPassword = async function (
  candidatePassword,
  userPassword
) {
  const verified = await bcrypt.compare(candidatePassword, userPassword);
  return verified;
};

// User model
module.exports = mongoose.model('User', userSchema);
