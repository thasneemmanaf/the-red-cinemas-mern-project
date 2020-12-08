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
      success_url: `https://${req.get(
        'host'
      )}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://${req.get('host')}/payment-failure`
    });
    res.status(201).json({
      reservationId,
      sessionId: session.id
    });
  } catch {
    next(new AppError('Unable to create movie at the moment', 400));
  }
};

// Stripe payment event handler - Check checkout.session.completed event
exports.stripeEventHandler = async (req, res, next) => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  const sig = req.headers['stripe-signature'];
  let event;

  // Verify stripe signature
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  // Handle the payment successfull event and update payment status to 'Success'
  if (event.type === 'checkout.session.completed') {
    const reservationId = event.data.object.client_reference_id;

    try {
      await Reservation.updateOne(
        { _id: ObjectId(reservationId) },
        { $set: { paymentStatus: 'Success' } }
      );
    } catch {
      return next(new AppError('Unable to create movie at the moment', 400));
    }
  }

  return res.status(200).json({ received: true });
};
