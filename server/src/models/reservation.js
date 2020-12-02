const mongoose = require('mongoose');

const { Schema } = mongoose;
const reservationSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Please provide date']
  },
  startAt: {
    type: String,
    required: [true, 'Please provide movie starting time'],
    trim: true
  },
  selectedSeats: {
    type: Array,
    required: [true, 'Please provide seats']
  },
  totalPrice: {
    type: Number,
    required: [true, 'Please provide ticket price']
  },
  totalSeats: {
    type: Number,
    required: [true, 'Please provide total seats']
  },
  movieId: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
    required: [true, 'Please provide movie id']
  },
  movie: {
    type: String,
    required: [true, 'Please provide movie name']
  },
  screenId: {
    type: Schema.Types.ObjectId,
    ref: 'Screen',
    required: [true, 'Please provide screen id']
  },
  selectedCinema: {
    type: String,
    required: [true, 'Please provide movie screen name']
  },
  emailId: {
    type: String,
    required: [true, 'Please provide email-id']
  },
  name: {
    type: String,
    required: [true, 'Please provide name']
  },
  paymentStatus: {
    type: String,
    required: [true, 'Please provide payment status']
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
