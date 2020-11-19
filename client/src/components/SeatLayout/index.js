/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect } from 'react';
import './SeatLayout.css';
import ReservationContext from '../../Store/ReservationContext';
import { getLocalStorage } from '../../utils/localStorage';

function SeatLayout({ reservedSeats, setShowModal }) {
  console.log(reservedSeats);
  const [reservation, dispatch] = useContext(ReservationContext);

  // if (!reservedSeats) {
  //   setReservedSeats(getLocalStorage('reservedSeats'));
  // }

  useEffect(() => {
    const localReservation = getLocalStorage('reservation', {});
    if (!reservation.seatLayout.row0) {
      dispatch({
        type: 'ADD_SEAT_LAYOUT',
        payload: localReservation.seatLayout
      });
    }
  }, []);

  // User should not be able to select more than 5 seats or reserved seats
  const handleSeatSelect = (e) => {
    if (e.target.classList.contains('unavailable')) return;
    if (
      reservation.selectedSeats.length === 5 &&
      !e.target.classList.contains('selected')
    ) {
      setShowModal({
        status: true,
        type: 'close',
        subject: 'Info',
        message: 'seat_limit_message'
      });
      return;
    }

    // Update seat number and total price based on user's seat selection
    e.target.classList.toggle('selected');
    if (reservation.selectedSeats.includes(e.target.id)) {
      dispatch({ type: 'REMOVE_SEATS', payload: e.target.id });
      dispatch({
        type: 'DECREMENT_TOTAL_PRICE',
        payload: reservation.ticketPrice
      });
    } else {
      dispatch({ type: 'ADD_SEATS', payload: e.target.id });
      dispatch({ type: 'ADD_TOTAL_PRICE', payload: reservation.ticketPrice });
    }
  };

  return (
    <>
      {reservation.seatLayout.row0 && (
        <div className="theatre">
          <div className="cinema_seats left">
            <div className="cinema_row row_1">
              {reservation.seatLayout.row0.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>

            <div className="cinema_row row_2">
              {reservation.seatLayout.row1.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>

            <div className="cinema_row row_3">
              {reservation.seatLayout.row2.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>

            <div className="cinema_row row_4">
              {reservation.seatLayout.row3.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>

            <div className="cinema_row row_5">
              {reservation.seatLayout.row4.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>
          </div>

          <div className="cinema_seats right">
            <div className="cinema_row row_1">
              {reservation.seatLayout.row5.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>

            <div className="cinema_row row_2">
              {reservation.seatLayout.row6.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>

            <div className="cinema_row row_3">
              {reservation.seatLayout.row7.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>

            <div className="cinema_row row_4">
              {reservation.seatLayout.row8.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>

            <div className="cinema_row row_5">
              {reservation.seatLayout.row9.map((seatNumber) => {
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${
                      reservedSeats.includes(seatNumber) && 'unavailable'
                    }`}
                    id={seatNumber}
                    onClick={handleSeatSelect}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SeatLayout;
