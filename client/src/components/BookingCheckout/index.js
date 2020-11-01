import React from 'react';
import { Link } from 'react-router-dom';

import classes from './BookingCheckout.module.css';

function BookingCheckout() {
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout_buttons}>
        <button className={classes.checkout_button} type="button">
          CANCEL
        </button>
        <Link to="/booking">
          <button className={classes.checkout_button} type="button">
            CHECK OUT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookingCheckout;
