const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Movie = require('../models/movie');
const AppError = require('../utils/appError');

// To generate a checkout session
exports.getCheckoutSession = async (req, res, next) => {
  try {
    // 1. Get the currently booked movie
    const movie = await Movie.findById(req.params.movieId);

    // 2. Create checkout session
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   success_url: `${req.protocol}://${req.get('host')}/`,
    //   cancel_url: `${req.protocol}://${req.get('host')}/booking`,
    //   customer_email: req.user.email,
    //   client_reference_id: req.params.movieId,
    //   line_items: [
    //     {
    //       name: `${movie.name}`,
    //       images: `${movie.img}`,
    //       amount: totalPrice,
    //       currency: 'sek',
    //       quantity: 1
    //     }
    //   ]
    // });
    // 3. Send checkout session as response
    res.status(200).json({
      status: 'success'
      // session
    });
  } catch {
    next(new AppError('Unable to create movie at the moment', 400));
  }
};
