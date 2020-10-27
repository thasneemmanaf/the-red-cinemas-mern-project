const express = require('express');
const { signUpUser } = require('../controllers/userController');

const router = express.Router();

router.post('/', signUpUser);

module.exports = router;
