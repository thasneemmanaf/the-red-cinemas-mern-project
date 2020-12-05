import React, { useContext, useEffect, useState } from 'react';

import axios from '../../axios';
import BookingCheckout from '../../components/BookingCheckout';
import MovieTicket from '../../components/MovieTicket';
import SeatLayout from '../../components/SeatLayout';

import classes from './Booking.module.css';
import Showcase from '../../components/Showcase';
import Modal from '../../components/Modal';
import ReservationContext from '../../Store/ReservationContext';
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage';

function Booking() {
  const [reservation] = useContext(ReservationContext);

  // Lazy Initialize already reserved unavailable Seats with local storage if available
  const [reservedSeats, setReservedSeats] = useState(() => {
    const localReservedSeats = getLocalStorage('reservedSeats', []);
    return localReservedSeats || [];
  });

  const [showModal, setShowModal] = useState({
    status: false,
    type: '',
    subject: '',
    message: ''
  });

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
      } catch {
        setShowModal({
          status: true,
          type: 'close',
          subject: 'error',
          message: 'something_wrong'
        });
      }
    }
    fetchData();
    // Update reservation to local storage
    setLocalStorage('reservation', reservation);
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
          <MovieTicket reservation={reservation} />
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
