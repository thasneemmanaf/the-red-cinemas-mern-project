import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';

import axios from '../../axios';

import classes from './BookingCheckout.module.css';
import ReservationContext from '../../Store/ReservationContext';
import sendEmail from '../../utils/sendEmail';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function BookingCheckout({ setShowModal }) {
  const [reservation] = useContext(ReservationContext);

  const handleCheckout = async () => {
    // Check if user is logged in before checkout
    if (!reservation.emailId) {
      setShowModal({
        status: true,
        type: 'sign_in',
        subject: 'Info',
        message: 'not_signedin_message'
      });
    }
    // Check if user has selected seats before checkout
    else if (reservation.selectedSeats.length === 0) {
      setShowModal({
        status: true,
        type: 'close',
        subject: 'Info',
        message: 'select_min_seat_message'
      });
    } else {
      // await sendEmail();

      const stripe = await stripePromise;

      // Create a session on server and reserve seats
      try {
        const response = await axios({
          method: 'post',
          url: '/reservation',
          data: reservation
        });

        const { reservationId, sessionId } = response.data;

        // Redirect to stripe hosted checkout page
        const result = await stripe.redirectToCheckout({
          sessionId
        });

        if (result.error) {
          console.log('payment failed');
        }
      } catch (error) {
        console.log(error);
      }
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
