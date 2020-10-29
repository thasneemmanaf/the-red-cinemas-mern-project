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
  seats: {
    type: [Schema.Types.Mixed],
    required: [true, 'Please provide seats']
  },
  ticketPrice: {
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
  screenId: {
    type: Schema.Types.ObjectId,
    ref: 'Screen',
    required: [true, 'Please provide screen id']
  },
  emailId: {
    type: String,
    required: [true, 'Please provide phone number']
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
