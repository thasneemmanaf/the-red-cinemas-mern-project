import React from 'react';

import BookingCheckout from '../BookingCheckout';
import MovieTicket from '../MovieTicket';
import SeatLayout2 from '../SeatLayout2';
// import SeatLayout from '../SeatLayout';
import classes from './Booking.module.css';
import Showcase from '../Showcase';

function Booking() {
  return (
    <div className={classes.container}>
      <div className={classes.container_center}>
        <div className={classes.screen_container}>
          <div className={classes.screen} />
        </div>
        <div className={classes.seat_layout}>
          <SeatLayout2 />
        </div>
        <div className={classes.showcase_container}>
          <Showcase />
        </div>
        <div className={classes.movie_ticket}>
          <MovieTicket />
        </div>
        <div className={classes.checkout_panel}>
          <BookingCheckout />
        </div>
      </div>
    </div>
  );
}

export default Booking;
