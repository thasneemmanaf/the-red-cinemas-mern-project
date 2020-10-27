const express = require('express');
const router = express.Router();

router.get('/', getAllUsers).post('/', signUpUser);

module.exports = router;
