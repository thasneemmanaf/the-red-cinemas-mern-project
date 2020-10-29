const express = require('express');
const {
  createReservation,
  getAllReservations,
  updateReservation
} = require('../controllers/reservationController');

const router = express.Router();

router
  .get('/', getAllReservations)
  .post('/', createReservation)
  .patch('/:reservationId', updateReservation);

module.exports = router;
