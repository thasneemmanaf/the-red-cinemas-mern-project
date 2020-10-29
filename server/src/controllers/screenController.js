const Screen = require('../models/screen');
const AppError = require('../utils/appError');

// To add a screen
exports.addScreen = async (req, res, next) => {
  try {
    const screen = new Screen(req.body);
    await screen.save();
    res.status(201).json({
      status: 'success'
    });
  } catch {
    next(new AppError('Unable to create screen at the moment', 400));
  }
};

// To get all screens
exports.getAllScreens = async (req, res, next) => {
  try {
    const screens = await Screen.find({});
    res.status(200).json({
      status: 'success',
      screens
    });
  } catch {
    next(new AppError('Unable to fetch screens at the moment', 400));
  }
};

// To update a screen
exports.updateScreen = async (req, res, next) => {
  try {
    await Screen.updateOne({ _id: req.params.screenId }, { $set: req.body });
    res.status(200).json({
      status: 'success'
    });
  } catch {
    next(new AppError('Unable to update screen at the moment', 400));
  }
};
