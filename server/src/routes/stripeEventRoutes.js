const express = require('express');
const { stripeEventHandler } = require('../controllers/checkoutController');

const router = express.Router();

router.post('/', stripeEventHandler);

module.exports = router;
