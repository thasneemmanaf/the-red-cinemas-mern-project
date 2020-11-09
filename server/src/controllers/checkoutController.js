/* eslint-disable object-curly-newline */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require('uuid');
const Movie = require('../models/movie');
const AppError = require('../utils/appError');

// To generate a checkout session
exports.getCheckoutSession = async (req, res, next) => {
  const { movie, movieId, movieImg, totalPrice, emailId, token } = req.body;
  const idempotencyKey = uuidv4();
  try {
    // 1. Create checkout session
    const customer = await stripe.customers.create({
      email: emailId,
      source: token,
      metadata: {
        userId: movieId
      }
    });

    const charge = await stripe.charges.create(
      {
        amount: totalPrice * 100,
        currency: 'usd',
        customer: customer.id
      },
      {
        idempotencyKey
      }
    );
    console.log(JSON.stringify(charge));

    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   success_url: `${req.protocol}://${req.get('host')}/`,
    //   cancel_url: `${req.protocol}://${req.get('host')}/booking`,
    //   // customer_email: emailId,
    //   // client_reference_id: movieId,
    //   line_items: [
    //     {
    //       // name: movie,
    //       // images: movieImg,
    //       price: totalPrice,
    //       // currency: 'sek',
    //       quantity: 1
    //     }
    //   ],
    //   mode: 'payment'
    // });
    // 2. Send checkout session as response
    res.status(200).json({
      status: 'success',
      customer
    });
  } catch (err) {
    console.log(err);
    next(new AppError('Unable to create movie at the moment', 400));
  }
};
