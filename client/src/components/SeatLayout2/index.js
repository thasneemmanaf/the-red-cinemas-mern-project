/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import './SeatLayout2.css';
import ReservationContext from '../../Store/ReservationContext';

function SeatLayout2({ reservedSeats }) {
  const [reservation, dispatch] = useContext(ReservationContext);

  const handleSeatSelect = (e) => {
    if (e.target.classList.contains('unavailable')) return;

    e.target.classList.toggle('selected');
    if (reservation.seats.includes(e.target.id)) {
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
  );
}

export default SeatLayout2;
