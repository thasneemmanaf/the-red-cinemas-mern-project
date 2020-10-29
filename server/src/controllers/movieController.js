const Movie = require('../models/movie');
const AppError = require('../utils/appError');

// To add a movie
exports.addMovie = async (req, res, next) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json({
      status: 'success'
    });
  } catch {
    next(new AppError('Unable to create movie at the moment', 400));
  }
};

// To get all movies
exports.getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json({
      status: 'success',
      movies
    });
  } catch {
    next(new AppError('Unable to fetch movies at the moment', 400));
  }
};

// To update a movie
exports.updateMovie = async (req, res, next) => {
  try {
    await Movie.updateOne({ _id: req.params.movieId }, { $set: req.body });
    res.status(200).json({
      status: 'success'
    });
  } catch {
    next(new AppError('Unable to update movie at the moment', 400));
  }
};
