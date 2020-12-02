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
    const updatePaymentStatus = async () => {
      try {
        const response = await axios({
          method: 'patch',
          url: `/reservation/5fabcaaebbcdcb4cdc3457b0`,
          data: {
            paymentStatus: 'Succeeded'
          }
        });
        console.log(response);
        console.log(reservation.reservationId);
      } catch (err) {
        console.log(err);
      }
    };
    updatePaymentStatus();
  }, []);

  return (
    <div className={classes.container}>
      Your ticket has been successfully booked
    </div>
  );
}

export default PaymentSuccess;
