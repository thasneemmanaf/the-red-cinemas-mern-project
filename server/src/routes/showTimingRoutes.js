const express = require('express');
const {
  addShowTiming,
  getShowTimings,
  updateShowTiming
} = require('../controllers/showTimingController');

const router = express.Router();

router
  .get('/', getShowTimings)
  .post('/', addShowTiming)
  .patch('/:showTimingId', updateShowTiming);

module.exports = router;
