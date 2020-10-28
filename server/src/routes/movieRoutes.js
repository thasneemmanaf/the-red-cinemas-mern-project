const express = require('express');
const {
  addMovie,
  getMovies,
  updateMovie
} = require('../controllers/movieController');

const router = express.Router();

router.get('/', getMovies).post('/', addMovie).patch('/:movieId', updateMovie);

module.exports = router;
