const express = require('express');
const {
  addShowTiming,
  getAllShowTimings,
  getShowTimings,
  updateShowTiming
} = require('../controllers/showTimingController');

const router = express.Router();

router
  .get('/', getAllShowTimings)
  .get('/:movieId', getShowTimings)
  .post('/', addShowTiming)
  .patch('/:showTimingId', updateShowTiming);

module.exports = router;
