const express = require('express');
const {
  createReservation,
  getAllReservations,
  getReservation
} = require('../controllers/reservationController');

const router = express.Router();

router
  .get('/', getAllReservations)
  .post('/', createReservation)
  .get('/:sessionId', getReservation);

module.exports = router;
