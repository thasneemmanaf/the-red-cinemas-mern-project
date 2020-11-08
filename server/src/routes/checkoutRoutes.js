const express = require('express');
const { getCheckoutSession } = require('../controllers/checkoutController');

const router = express.Router();

router.get('/checkout-session/:movieId', getCheckoutSession);

module.exports = router;
