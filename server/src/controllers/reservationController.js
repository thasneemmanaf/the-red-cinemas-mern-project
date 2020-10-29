const Reservation = require('../models/reservation');
const AppError = require('../utils/appError');

// To create a reservation
exports.createReservation = async (req, res, next) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({
      status: 'success'
    });
  } catch {
    next(new AppError('Unable to reserve at the moment', 400));
  }
};

// To get all reservations
exports.getAllReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find({});
    res.status(200).json({
      status: 'success',
      reservations
    });
  } catch {
    next(new AppError('Unable to fetch reservations at the moment', 400));
  }
};

// To update a reservation
exports.updateReservation = async (req, res, next) => {
  try {
    await Reservation.updateOne(
      { _id: req.params.reservationId },
      { $set: req.body }
    );
    res.status(200).json({
      status: 'success'
    });
  } catch {
    next(new AppError('Unable to update the reservation at the moment', 400));
  }
};
