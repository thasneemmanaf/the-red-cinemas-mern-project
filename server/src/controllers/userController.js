const User = require('../models/user');

// To signup a user
exports.signUpUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};
