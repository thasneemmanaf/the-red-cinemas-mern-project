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

// To get movies
exports.getMovies = async (req, res, next) => {
  try {
    let movies;
    const { limit, type } = req.query;

    // Fetch Coming Soon movies and Currently showing movies based on type
    if (type === 'comingsoon') {
      movies = await Movie.find({
        releaseDate: { $gt: new Date() }
      }).limit(parseInt(limit));
    } else if (type === 'playingnow') {
      movies = await Movie.find({
        releaseDate: { $lte: new Date() },
        endDate: { $gte: new Date() }
      }).limit(parseInt(limit));
    }

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

// To update a movie
exports.getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById({ _id: req.params.movieId });
    res.status(200).json({
      status: 'success',
      movie
    });
  } catch {
    next(new AppError('Unable to fetch movie at the moment', 400));
  }
};
