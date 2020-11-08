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
  },
  seats: {
    row0: {
      type: Array
    },
    row1: {
      type: Array
    },
    row2: {
      type: Array
    },
    row3: {
      type: Array
    },
    row4: {
      type: Array
    },
    row5: {
      type: Array
    },
    row6: {
      type: Array
    },
    row7: {
      type: Array
    },
    row8: {
      type: Array
    },
    row9: {
      type: Array
    }
  }
});

// Screen model
module.exports = mongoose.model('Screen', screenSchema);
