import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { loadStripe } from '@stripe/stripe-js';

import axios from '../../axios';

import classes from './BookingCheckout.module.css';
import ReservationContext from '../../Store/ReservationContext';
import AuthContext from '../../Store/AuthContext';
import sendEmail from '../../utils/sendEmail';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function BookingCheckout({ setShowModal }) {
  const [reservation] = useContext(ReservationContext);
  const [authStatus] = useContext(AuthContext);

  const { t } = useTranslation();

  const handleCheckout = async () => {
    // Check if user has selected seats before checkout
    if (reservation.selectedSeats.length === 0) {
      setShowModal({
        status: true,
        type: 'close',
        subject: 'Info',
        message: 'select_min_seat_message'
      });
    }
    // Check if user is logged in before checkout
    else if (!authStatus.isLoggedIn) {
      setShowModal({
        status: true,
        type: 'sign_in',
        subject: 'Info',
        message: 'not_signedin_message'
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
            {t('cancel')}
          </button>
        </Link>
        <Link to="/booking">
          <button
            className={classes.checkout_button}
            type="button"
            onClick={handleCheckout}>
            {t('checkout')}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookingCheckout;
