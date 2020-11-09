const express = require('express');
const { getCheckoutSession } = require('../controllers/checkoutController');

const router = express.Router();

router.post('/checkout-session', getCheckoutSession);

module.exports = router;
