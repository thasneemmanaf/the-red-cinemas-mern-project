const express = require('express');
const {
  addShowTiming,
  getAllShowTimings,
  getReservedSeats,
  getShowTimings,
  updateShowTiming
} = require('../controllers/showTimingController');

const router = express.Router();

router
  .get('/', getAllShowTimings)
  .get('/reserved-seats', getReservedSeats)
  .get('/:movieId', getShowTimings)
  .post('/', addShowTiming)
  .patch('/:showTimingId', updateShowTiming);

module.exports = router;
