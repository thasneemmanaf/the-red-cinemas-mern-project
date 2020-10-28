const jwt = require('jsonwebtoken');
const User = require('../models/user');

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
  } catch (error) {
    res.status(401).json(error);
    console.log(error);
  }
};

// Signin user
exports.signInUser = async (req, res, next) => {
  const { emailId, password } = req.body;
  try {
    // Check if email and password is supplied
    if (!emailId || !password) {
      res.status(401).json({ message: 'Please provide email and password' });
      return next();
    }

    const user = await User.findOne({ emailId }).select('+password');

    // Check if user exists and if password is correct

    if (!user || !(await user.verifyPassword(password, user.password))) {
      console.log('email or password is incorrect');
      throw new Error('ok');
    }

    // If everything is ok, generate token
    const token = generateToken(user._id);
    res.status(200).json({ status: 'success', token });
  } catch (err) {
    console.log(err);
  }
};
