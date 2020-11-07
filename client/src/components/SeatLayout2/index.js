/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import './SeatLayout2.css';
import ReservationContext from '../../Store/ReservationContext';

function SeatLayout2() {
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
  console.log(reservation.ticketPrice);
  console.log(reservation.totalPrice);
  return (
    <div className="theatre">
      <div className="cinema_seats left">
        <div className="cinema_row row_1">
          <div className="seat" id="A0" onClick={handleSeatSelect} />
          <div className="seat" id="B0" onClick={handleSeatSelect} />
          <div className="seat" id="C0" onClick={handleSeatSelect} />
          <div className="seat" id="D0" onClick={handleSeatSelect} />
          <div className="seat" id="E0" onClick={handleSeatSelect} />
          <div className="seat" id="F0" onClick={handleSeatSelect} />
          <div className="seat" id="G0" onClick={handleSeatSelect} />
        </div>

        <div className="cinema_row row_2">
          <div className="seat" id="A1" onClick={handleSeatSelect} />
          <div className="seat" id="B1" onClick={handleSeatSelect} />
          <div className="seat" id="C1" onClick={handleSeatSelect} />
          <div className="seat" id="D1" onClick={handleSeatSelect} />
          <div className="seat" id="E1" onClick={handleSeatSelect} />
          <div className="seat" id="F1" onClick={handleSeatSelect} />
          <div className="seat" id="G1" onClick={handleSeatSelect} />
        </div>

        <div className="cinema_row row_3">
          <div className="seat" id="A2" onClick={handleSeatSelect} />
          <div className="seat" id="B2" onClick={handleSeatSelect} />
          <div className="seat" id="C2" onClick={handleSeatSelect} />
          <div className="seat" id="D2" onClick={handleSeatSelect} />
          <div className="seat" id="E2" onClick={handleSeatSelect} />
          <div className="seat" id="F2" onClick={handleSeatSelect} />
          <div className="seat" id="G2" onClick={handleSeatSelect} />
        </div>

        <div className="cinema_row row_4">
          <div className="seat" id="A3" onClick={handleSeatSelect} />
          <div className="seat" id="B3" onClick={handleSeatSelect} />
          <div className="seat" id="C3" onClick={handleSeatSelect} />
          <div className="seat" id="D3" onClick={handleSeatSelect} />
          <div className="seat" id="E3" onClick={handleSeatSelect} />
          <div className="seat" id="F3" onClick={handleSeatSelect} />
          <div className="seat" id="G3" onClick={handleSeatSelect} />
        </div>

        <div className="cinema_row row_5">
          <div className="seat" id="A4" onClick={handleSeatSelect} />
          <div className="seat" id="B4" onClick={handleSeatSelect} />
          <div className="seat" id="C4" onClick={handleSeatSelect} />
          <div className="seat" id="D4" onClick={handleSeatSelect} />
          <div className="seat" id="E4" onClick={handleSeatSelect} />
          <div className="seat" id="F4" onClick={handleSeatSelect} />
          <div className="seat" id="G4" onClick={handleSeatSelect} />
        </div>
      </div>

      <div className="cinema_seats right">
        <div className="cinema_row row_1">
          <div className="seat active" id="A5" onClick={handleSeatSelect} />
          <div className="seat" id="B5" onClick={handleSeatSelect} />
          <div className="seat" id="C5" onClick={handleSeatSelect} />
          <div className="seat" id="D5" onClick={handleSeatSelect} />
          <div className="seat" id="E5" onClick={handleSeatSelect} />
          <div className="seat" id="F5" onClick={handleSeatSelect} />
          <div className="seat" id="G5" onClick={handleSeatSelect} />
        </div>

        <div className="cinema_row row_2">
          <div className="seat" id="A6" onClick={handleSeatSelect} />
          <div className="seat" id="B6" onClick={handleSeatSelect} />
          <div className="seat" id="C6" onClick={handleSeatSelect} />
          <div className="seat" id="D6" onClick={handleSeatSelect} />
          <div className="seat" id="E6" onClick={handleSeatSelect} />
          <div className="seat" id="F6" onClick={handleSeatSelect} />
          <div className="seat" id="G6" onClick={handleSeatSelect} />
        </div>

        <div className="cinema_row row_3">
          <div className="seat" id="A7" onClick={handleSeatSelect} />
          <div className="seat" id="B7" onClick={handleSeatSelect} />
          <div className="seat" id="C7" onClick={handleSeatSelect} />
          <div
            className="seat unavailable"
            id="D7"
            onClick={handleSeatSelect}
          />
          <div
            className="seat unavailable"
            id="E7"
            onClick={handleSeatSelect}
          />
          <div className="seat" id="F7" onClick={handleSeatSelect} />
          <div className="seat" id="G7" onClick={handleSeatSelect} />
        </div>

        <div className="cinema_row row_4">
          <div className="seat" id="A8" onClick={handleSeatSelect} />
          <div className="seat" id="B8" onClick={handleSeatSelect} />
          <div className="seat" id="C8" onClick={handleSeatSelect} />
          <div
            className="seat unavailable"
            id="D8"
            onClick={handleSeatSelect}
          />
          <div
            className="seat unavailable"
            id="E8"
            onClick={handleSeatSelect}
          />
          <div className="seat" id="F8" onClick={handleSeatSelect} />
          <div className="seat" id="G8" onClick={handleSeatSelect} />
        </div>

        <div className="cinema_row row_5">
          <div className="seat" id="A9" onClick={handleSeatSelect} />
          <div className="seat" id="B9" onClick={handleSeatSelect} />
          <div className="seat" id="C9" onClick={handleSeatSelect} />
          <div className="seat" id="D9" onClick={handleSeatSelect} />
          <div className="seat" id="E9" onClick={handleSeatSelect} />
          <div className="seat" id="F9" onClick={handleSeatSelect} />
          <div className="seat" id="G9" onClick={handleSeatSelect} />
        </div>
      </div>
    </div>
  );
}

export default SeatLayout2;
