const express = require('express');
const {
  signUpUser,
  signInUser,
  fetchUser,
  signoutUser,
  authenticateUser,
  deleteUser
} = require('../controllers/userController');

const router = express.Router();

router
  .post('/signup', signUpUser)
  .post('/signin', signInUser)
  .get('/signin', fetchUser)
  .get('/signout', signoutUser)
  .delete('/:userId', authenticateUser, deleteUser);

module.exports = router;
