/* eslint-disable object-curly-newline */
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const { createReservation } = require('./reservationController');

const AppError = require('../utils/appError');

// To generate a checkout session
exports.getCheckoutSession = async (req, res, next) => {
  const { movie, totalPrice, emailId, movieImg } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: emailId,
      line_items: [
        {
          amount: totalPrice * 100,
          currency: 'sek',
          name: movie,
          quantity: 1,
          images: [movieImg]
        }
      ],
      mode: 'payment',
      success_url: `${req.protocol}://127.0.0.1:3000/payment-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/booking`
    });

    // Forward session id to next middleware
    req.body.sessionId = session.id;
    createReservation(req, res, next);
  } catch (err) {
    console.log(err);
    next(new AppError('Unable to create movie at the moment', 400));
  }
};

// Stripe payment event handler
exports.stripeEventHandler = async (req, res) => {
  const payload = req.body;
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log('event: ', event);

  res.status(200);
};
