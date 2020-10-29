const express = require('express');
const {
  getAllScreens,
  addScreen,
  updateScreen
} = require('../controllers/screenController');

const router = express.Router();

router
  .get('/', getAllScreens)
  .post('/', addScreen)
  .patch('/:screenId', updateScreen);

module.exports = router;
