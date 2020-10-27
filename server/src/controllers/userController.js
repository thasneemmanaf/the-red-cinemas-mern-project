const User = require('../models/user');

// To signup a user
exports.signUpUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
};
