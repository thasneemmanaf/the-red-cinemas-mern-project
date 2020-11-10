import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import axios from '../../axios';
import BookingCheckout from '../BookingCheckout';
import MovieTicket from '../MovieTicket';
import SeatLayout2 from '../SeatLayout2';
// import SeatLayout from '../SeatLayout';
import classes from './Booking.module.css';
import Showcase from '../Showcase';
import ReservationContext from '../../Store/ReservationContext';

const stripePromise = loadStripe(
  'pk_test_51HlLg3IZDks6HiKTIC1tGO58Vf3Czk45saBZ4FYitiFco9UcPg6NT1LQvF8g5bRoIH5n50IpF23tyHXKqt490205006HU99NUt'
);

function Booking() {
  const [reservation] = useContext(ReservationContext);
  const [reservedSeats, setReservedSeats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/show-timing/reserved-seats', {
          params: {
            date: reservation.date.format('YYYY-MM-DD'),
            screenId: reservation.screenId,
            startAt: reservation.startAt
          }
        });
        setReservedSeats(response.data.reservedSeats[0].reservedSeats);
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
          <SeatLayout2 reservedSeats={reservedSeats} />
        </div>
        <div className={classes.showcase_container}>
          <Showcase />
        </div>
        <div className={classes.movie_ticket}>
          <MovieTicket />
        </div>
        <div className={classes.checkout_panel}>
          <Elements stripe={stripePromise}>
            <BookingCheckout />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default Booking;
