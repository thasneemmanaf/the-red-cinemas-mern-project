const mongoose = require('mongoose');

const { Schema } = mongoose;
const showTimingSchema = new Schema({
  startAt: {
    type: String,
    required: [true, 'Please provide show starting time'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Please provide show date']
  },
  endDate: {
    type: Date,
    required: [true, 'Please provide show end date']
  },
  reservedSeats: {
    type: Array
  },
  movieId: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
    required: [true, 'Please provide movie id']
  },
  screenId: {
    type: Schema.Types.ObjectId,
    ref: 'Screen',
    required: [true, 'Please provide screen id']
  }
});

const ShowTiming = mongoose.model('ShowTiming', showTimingSchema);

module.exports = ShowTiming;
