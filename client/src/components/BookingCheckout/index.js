import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';

import classes from './BookingCheckout.module.css';
import ReservationContext from '../../Store/ReservationContext';

function BookingCheckout() {
  const [reservation] = useContext(ReservationContext);
  const handleCheckout = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: '/checkout/checkout-session',
        data: reservation
      });
      console.log(response);
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
