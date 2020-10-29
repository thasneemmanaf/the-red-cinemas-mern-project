const mongoose = require('mongoose');

// Screen Schema
const screenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide screen name'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Please provide screen image']
  },
  city: {
    type: String,
    required: [true, 'Please provide screen city'],
    trim: true
  },
  ticketPrice: {
    type: Number,
    required: [true, 'Please provide ticket price']
  }
});

// Screen model
module.exports = mongoose.model('Screen', screenSchema);
