const express = require('express');
const { createCheckoutSession } = require('../controllers/checkoutController');

const router = express.Router();

router.post('/checkout-session', createCheckoutSession);

module.exports = router;
