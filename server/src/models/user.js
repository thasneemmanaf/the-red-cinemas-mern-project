const mongoose = require('mongoose');
const validator = require('validator');

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

// User model
module.exports = mongoose.model('User', userSchema);
