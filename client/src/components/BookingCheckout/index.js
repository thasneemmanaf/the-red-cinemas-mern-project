import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';

import axios from '../../axios';

import classes from './BookingCheckout.module.css';
import ReservationContext from '../../Store/ReservationContext';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function BookingCheckout() {
  const [reservation, dispatch] = useContext(ReservationContext);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Create a session on server and reserve seats
    try {
      const response = await axios({
        method: 'post',
        url: '/checkout/checkout-session',
        data: reservation
      });
      const { reservationId } = response.data;
      dispatch({ type: 'ADD_RESERVATION_ID', payload: reservationId });

      // Redirect to stripe hosted checkout page
      // const result =
      await stripe.redirectToCheckout({
        sessionId: response.data.id
      });

      // if (result.error) {
      //   console.log('payment failed');
      // } else {
      // await axios({
      //   method: 'patch',
      //   url: `/reservation/${reservationId}`,
      //   data: {
      //     paymentStatus: 'Succeeded'
      //   }
      // });
      // }
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
          <button
            className={classes.checkout_button}
            type="button"
            onClick={handleCheckout}>
            CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookingCheckout;
