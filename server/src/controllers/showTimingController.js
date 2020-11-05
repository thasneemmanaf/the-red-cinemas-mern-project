const mongoose = require('mongoose');

const ShowTiming = require('../models/showTiming');
const AppError = require('../utils/appError');

const { ObjectId } = mongoose.Types;

// To add a showTiming
exports.addShowTiming = async (req, res, next) => {
  try {
    const showTiming = new ShowTiming(req.body);
    await showTiming.save();
    res.status(201).json({
      status: 'success'
    });
  } catch {
    next(new AppError('Unable to add showTiming at the moment', 400));
  }
};

// To get all showTimings
exports.getAllShowTimings = async (req, res, next) => {
  try {
    const showTimings = await ShowTiming.find({});
    res.status(200).json({
      status: 'success',
      showTimings
    });
  } catch {
    next(new AppError('Unable to fetch showTimings at the moment', 400));
  }
};

// To get showtimings and screens based on movie id
exports.getShowTimings = async (req, res, next) => {
  const { selectedDate } = req.query;
  const { movieId } = req.params;
  try {
    const showTimings = await ShowTiming.aggregate([
      {
        $match: {
          movieId: ObjectId(`${movieId}`),
          endDate: { $gte: new Date(selectedDate) }
        }
      },
      {
        $lookup: {
          from: 'screens',
          localField: 'screenId',
          foreignField: '_id',
          as: 'screen_details'
        }
      },
      {
        $unset: [
          '_id',
          'screen_details._id',
          'screen_details.image',
          'screen_details.city'
        ]
      }
    ]);

    res.status(200).json({
      status: 'success',
      showTimings
    });
  } catch {
    next(new AppError('Unable to fetch showTimings at the moment', 400));
  }
};

// To update a showTiming
exports.updateShowTiming = async (req, res, next) => {
  try {
    await ShowTiming.updateOne(
      { _id: req.params.showTimingId },
      { $set: req.body }
    );
    res.status(200).json({
      status: 'success'
    });
  } catch {
    next(new AppError('Unable to update showTiming at the moment', 400));
  }
};
