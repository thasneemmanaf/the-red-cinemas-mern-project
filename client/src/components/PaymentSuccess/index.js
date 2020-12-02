/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from '../../axios';
import MovieTicket from '../MovieTicket';
// import ReservationContext from '../../Store/ReservationContext';
import classes from './PaymentSuccess.module.css';

function PaymentSuccess() {
  // const [reservation] = useContext(ReservationContext);
  const [reservation, setReservation] = useState();
  // Extract sessionId from url
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get('session_id');
  console.log(sessionId);

  useEffect(() => {
    const getReservation = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `/reservation/${sessionId}`
        });
        setReservation({
          ...response.data.reservation,
          date: moment(response.data.reservation.date)
        });
        console.log(response.data.reservation);
      } catch (err) {
        console.log(err);
      }
    };
    getReservation();
  }, []);

  return (
    <div className={classes.container}>
      Your ticket has been successfully booked
      {reservation && <MovieTicket reservation={reservation} />}
    </div>
  );
}

export default PaymentSuccess;
