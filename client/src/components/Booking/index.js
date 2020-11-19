import React, { useContext, useEffect, useState } from 'react';

import axios from '../../axios';
import BookingCheckout from '../BookingCheckout';
import MovieTicket from '../MovieTicket';
import SeatLayout from '../SeatLayout';

import classes from './Booking.module.css';
import Showcase from '../Showcase';
import Modal from '../Modal';
import ReservationContext from '../../Store/ReservationContext';
import dispatchActions from '../../utils/dispatchActions';
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage';

function Booking() {
  const [reservation, dispatch] = useContext(ReservationContext);

  // Initialize reserved Seats state with local storage if available
  const [reservedSeats, setReservedSeats] = useState(
    getLocalStorage('reservedSeats', [])
      ? getLocalStorage('reservedSeats', [])
      : []
  );
  const [showModal, setShowModal] = useState({
    status: false,
    type: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Get reservation from local storage after reloading the page and skip initial loading
    if (!reservation.movie) {
      const localReservation = getLocalStorage('reservation', reservation);
      dispatchActions(dispatch, localReservation);
    }
    // Update reservation in local storage every time reservation info is updated
    setLocalStorage('reservation', reservation);
  }, [reservation]);

  // Fetch already reserved seats for a specific show after component is mounted
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
        setLocalStorage(
          'reservedSeats',
          response.data.reservedSeats[0].reservedSeats
        );
        setReservedSeats(response.data.reservedSeats[0].reservedSeats);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.container_center}>
        <div className={classes.screen_container}>
          <div className={classes.screen} />
        </div>
        <div className={classes.seat_layout}>
          <SeatLayout
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
