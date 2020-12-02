/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import axios from '../../axios';
import ReservationContext from '../../Store/ReservationContext';
import classes from './PaymentSuccess.module.css';

function PaymentSuccess() {
  const [reservation] = useContext(ReservationContext);

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
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getReservation();
  }, []);

  return (
    <div className={classes.container}>
      Your ticket has been successfully booked
    </div>
  );
}

export default PaymentSuccess;
