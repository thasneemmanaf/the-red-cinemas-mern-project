const jwt = require('jsonwebtoken');
const User = require('../models/user');
const AppError = require('../utils/appError');

// To generate token
const generateToken = (id) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

// To signup a user
exports.signUpUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const token = generateToken(newUser._id);
    res.status(200).json({ user: newUser, token });
  } catch {
    next(new AppError('Unable to Signup at the moment', 400));
  }
};

// Signin user
exports.signInUser = async (req, res, next) => {
  const { emailId, password } = req.body;
  try {
    // Check if email and password is supplied
    if (!emailId || !password) {
      return next(new AppError('Please provide email and password', 401));
    }

    const user = await User.findOne({ emailId }).select('+password');

    // Check if user exists and if password is correct
    if (!user || !(await user.verifyPassword(password, user.password))) {
      return next(new AppError('Email or password is incorrect', 401));
    }

    // If everything is ok, generate token
    const token = generateToken(user._id);
    return res.status(200).json({ status: 'success', token });
  } catch {
    return next(new AppError('Unable to Signin at the moment', 400));
  }
};
