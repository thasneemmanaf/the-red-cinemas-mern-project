import React, { useContext, useEffect } from 'react';
import moment from 'moment';

import axios from '../../axios';
import BookingCheckout from '../BookingCheckout';
import MovieTicket from '../MovieTicket';
import SeatLayout2 from '../SeatLayout2';
// import SeatLayout from '../SeatLayout';
import classes from './Booking.module.css';
import Showcase from '../Showcase';
import ReservationContext from '../../Store/ReservationContext';

function Booking() {
  const [reservation] = useContext(ReservationContext);

  useEffect(() => {
    console.log(reservation.date.toDate());
    async function fetchData() {
      try {
        const response = await axios.get('/reservation', {
          params: {
            date: reservation.date.format('YYYY-MM-DD'),
            screenId: reservation.screenId,
            startAt: reservation.startAt
          }
        });
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [reservation.date, reservation.screenId, reservation.startAt]);

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
