const ShowTiming = require('../models/showTiming');
const AppError = require('../utils/appError');

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
exports.getShowTimings = async (req, res, next) => {
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
