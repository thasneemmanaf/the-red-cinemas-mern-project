import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';

import StripeCheckout from 'react-stripe-checkout';
import axios from '../../axios';

import classes from './BookingCheckout.module.css';
import ReservationContext from '../../Store/ReservationContext';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function BookingCheckout() {
  const [reservation] = useContext(ReservationContext);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await axios({
        method: 'post',
        url: '/checkout/checkout-session',
        data: reservation
      });
      console.log('response: ', response.data.id);

      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id
      });

      console.log('result: ', result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.checkout}>
      <div className={classes.checkout_buttons}>
        <Link to="/">
          <button className={classes.checkout_button} type="button">
            CANCEL
          </button>
        </Link>
        <Link to="/booking">
          {/* <StripeCheckout */}
          {/* stripeKey={process.env.REACT_APP_STRIPE_KEY}
          token={handleCheckout}
          name="Book movie" image={reservation.movieImg}> */}
          <button
            className={classes.checkout_button}
            type="button"
            onClick={handleCheckout}>
            CHECKOUT
          </button>
          {/* </StripeCheckout> */}
        </Link>
      </div>
    </div>
  );
}

export default BookingCheckout;
