import React from 'react';
import { Link } from 'react-router-dom';

import classes from './BookingCheckout.module.css';

function BookingCheckout() {
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout_buttons}>
        <Link to="/">
          <button className={classes.checkout_button} type="button">
            CANCEL
          </button>
        </Link>
        <Link to="/booking">
          <button className={classes.checkout_button} type="button">
            CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookingCheckout;
