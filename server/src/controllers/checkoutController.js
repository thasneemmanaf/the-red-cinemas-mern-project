/* eslint-disable object-curly-newline */
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createReservation } = require('../controllers/reservationController');

const { v4: uuidv4 } = require('uuid');
const AppError = require('../utils/appError');

// To generate a checkout session
exports.getCheckoutSession = async (req, res, next) => {
  const { name, movie, movieId, totalPrice, emailId, token } = req.body;

  const idempotencyKey = uuidv4();
  try {
    const customer = await stripe.customers.create({
      name,
      email: emailId,
      source: token.id,
      metadata: {
        userId: movieId
      }
    });

    const charge = await stripe.charges.create(
      {
        amount: totalPrice * 100,
        currency: 'sek',
        customer: customer.id,
        description: `Purchase movie ticket for ${movie}`
      },
      {
        idempotencyKey
      }
    );

    createReservation(req, res, next);
  } catch (err) {
    next(new AppError('Unable to create movie at the moment', 400));
  }
};
