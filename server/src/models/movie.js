const mongoose = require('mongoose');

// Movie Schema
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide movie title'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Please provide movie image']
  },
  genre: {
    type: String,
    required: [true, 'Please provide movie genre'],
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'Please provide duration']
  },
  director: {
    type: String,
    trim: true
  },
  cast: {
    type: String,
    trim: true
  },
  description: {
    en: {
      type: String,
      required: [true, 'Please provide description']
    },
    sv: {
      type: String
    },
    ml: {
      type: String
    }
  },
  originalLanguage: {
    type: String
  },
  releaseDate: {
    type: Date,
    required: [true, 'Please provide movie release date']
  },
  endDate: {
    type: Date,
    required: [true, 'Please provide movie end date']
  }
});

// Movie model
module.exports = mongoose.model('Movie', movieSchema);
