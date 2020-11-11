/* eslint-disable object-curly-newline */
const mongoose = require('mongoose');
require('dotenv').config();

const { ObjectId } = mongoose.Types;

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const Reservation = require('../models/reservation');
const AppError = require('../utils/appError');

// To generate a checkout session
exports.createCheckoutSession = async (req, res, next) => {
  const { movie, totalPrice, emailId, movieImg, reservationId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: emailId,
      client_reference_id: reservationId,
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

    res.status(201).json({
      reservationId,
      sessionId: session.id
    });
  } catch (err) {
    console.log(err);
    next(new AppError('Unable to create movie at the moment', 400));
  }
};

// Stripe payment event handler
exports.stripeEventHandler = async (req, res) => {
  const eventType = req.body.type;

  // Handle the payment successfull event and update payment status to 'Success'
  if (eventType === 'checkout.session.completed') {
    const reservationId = req.body.data.object.client_reference_id;
    try {
      await Reservation.updateOne(
        { _id: ObjectId(reservationId) },
        { $set: { paymentStatus: 'Success' } }
      );
    } catch (error) {
      console.log(error);
    }
  }

  res.status(200);
};
