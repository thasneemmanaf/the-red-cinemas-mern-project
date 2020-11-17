import React, { useContext, useEffect, useState } from 'react';

import axios from '../../axios';
import BookingCheckout from '../BookingCheckout';
import MovieTicket from '../MovieTicket';
import SeatLayout2 from '../SeatLayout2';
// import SeatLayout from '../SeatLayout';
import classes from './Booking.module.css';
import Showcase from '../Showcase';
import Modal from '../Modal';
import ReservationContext from '../../Store/ReservationContext';

function Booking() {
  const [reservation] = useContext(ReservationContext);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [showModal, setShowModal] = useState({
    status: false,
    type: '',
    subject: '',
    message: ''
  });

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
          <SeatLayout2
            reservedSeats={reservedSeats}
            setShowModal={setShowModal}
          />
        </div>
        <div className={classes.showcase_container}>
          <Showcase />
        </div>
        <div className={classes.movie_ticket}>
          <MovieTicket />
        </div>
        <div className={classes.checkout_panel}>
          <BookingCheckout setShowModal={setShowModal} />
        </div>
      </div>
      {showModal.status && (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default Booking;
