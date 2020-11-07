/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import classes from './SeatLayout2.module.css';
import ReservationContext from '../../Store/ReservationContext';

function SeatLayout2() {
  const [reservation, dispatch] = useContext(ReservationContext);

  const handleSeatSelect = (e) => {
    console.log(e.target);

    e.target.classList.toggle(classes.selected);
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
    <div className={classes.theatre}>
      <div className={`${classes.cinema_seats} ${classes.left}`}>
        <div className={`${classes.cinema_row} ${classes.row_1}`}>
          <div className={classes.seat} id="A0" onClick={handleSeatSelect} />
          <div className={classes.seat} id="B0" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C0" onClick={handleSeatSelect} />
          <div className={classes.seat} id="D0" onClick={handleSeatSelect} />
          <div className={classes.seat} id="E0" onClick={handleSeatSelect} />
          <div className={classes.seat} id="F0" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G0" onClick={handleSeatSelect} />
        </div>

        <div className={`${classes.cinema_row} ${classes.row_2}`}>
          <div className={classes.seat} id="A1" onClick={handleSeatSelect} />
          <div className={classes.seat} id="B1" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C1" onClick={handleSeatSelect} />
          <div className={classes.seat} id="D1" onClick={handleSeatSelect} />
          <div className={classes.seat} id="E1" onClick={handleSeatSelect} />
          <div className={classes.seat} id="F1" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G1" onClick={handleSeatSelect} />
        </div>

        <div className={`${classes.cinema_row} ${classes.row_3}`}>
          <div className={classes.seat} id="A2" onClick={handleSeatSelect} />
          <div className={classes.seat} id="B2" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C2" onClick={handleSeatSelect} />
          <div className={classes.seat} id="D2" onClick={handleSeatSelect} />
          <div className={classes.seat} id="E2" onClick={handleSeatSelect} />
          <div className={classes.seat} id="F2" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G2" onClick={handleSeatSelect} />
        </div>

        <div className={`${classes.cinema_row} ${classes.row_4}`}>
          <div className={classes.seat} id="A3" onClick={handleSeatSelect} />
          <div className={classes.seat} id="B3" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C3" onClick={handleSeatSelect} />
          <div className={classes.seat} id="D3" onClick={handleSeatSelect} />
          <div className={classes.seat} id="E3" onClick={handleSeatSelect} />
          <div className={classes.seat} id="F3" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G3" onClick={handleSeatSelect} />
        </div>

        <div className={`${classes.cinema_row} ${classes.row_5}`}>
          <div className={classes.seat} id="A4" onClick={handleSeatSelect} />
          <div className={classes.seat} id="B4" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C4" onClick={handleSeatSelect} />
          <div className={classes.seat} id="D4" onClick={handleSeatSelect} />
          <div className={classes.seat} id="E4" onClick={handleSeatSelect} />
          <div className={classes.seat} id="F4" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G4" onClick={handleSeatSelect} />
        </div>
      </div>

      <div className={`${classes.cinema_seats} ${classes.right}`}>
        <div className={`${classes.cinema_row} ${classes.row_1}`}>
          <div
            className={`${classes.seat} ${classes.actve}`}
            id="A5"
            onClick={handleSeatSelect}
          />
          <div className={classes.seat} id="B5" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C5" onClick={handleSeatSelect} />
          <div className={classes.seat} id="D5" onClick={handleSeatSelect} />
          <div className={classes.seat} id="E5" onClick={handleSeatSelect} />
          <div className={classes.seat} id="F5" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G5" onClick={handleSeatSelect} />
        </div>

        <div className={`${classes.cinema_row} ${classes.row_2}`}>
          <div className={classes.seat} id="A6" onClick={handleSeatSelect} />
          <div className={classes.seat} id="B6" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C6" onClick={handleSeatSelect} />
          <div className={classes.seat} id="D6" onClick={handleSeatSelect} />
          <div className={classes.seat} id="E6" onClick={handleSeatSelect} />
          <div className={classes.seat} id="F6" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G6" onClick={handleSeatSelect} />
        </div>

        <div className={`${classes.cinema_row} ${classes.row_3}`}>
          <div className={classes.seat} id="A7" onClick={handleSeatSelect} />
          <div className={classes.seat} id="B7" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C7" onClick={handleSeatSelect} />
          <div
            className={`${classes.seat} ${classes.unavailable}`}
            id="D7"
            onClick={handleSeatSelect}
          />
          <div
            className={`${classes.seat} ${classes.unavailable}`}
            id="E7"
            onClick={handleSeatSelect}
          />
          <div className={classes.seat} id="F7" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G7" onClick={handleSeatSelect} />
        </div>

        <div className={`${classes.cinema_row} ${classes.row_4}`}>
          <div className={classes.seat} id="A8" onClick={handleSeatSelect} />
          <div className={classes.seat} id="B8" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C8" onClick={handleSeatSelect} />
          <div
            className={`${classes.seat} ${classes.unavailable}`}
            id="D8"
            onClick={handleSeatSelect}
          />
          <div
            className={`${classes.seat} ${classes.unavailable}`}
            id="E8"
            onClick={handleSeatSelect}
          />
          <div className={classes.seat} id="F8" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G8" onClick={handleSeatSelect} />
        </div>

        <div className={`${classes.cinema_row} ${classes.row_5}`}>
          <div className={classes.seat} id="A9" onClick={handleSeatSelect} />
          <div className={classes.seat} id="B9" onClick={handleSeatSelect} />
          <div className={classes.seat} id="C9" onClick={handleSeatSelect} />
          <div className={classes.seat} id="D9" onClick={handleSeatSelect} />
          <div className={classes.seat} id="E9" onClick={handleSeatSelect} />
          <div className={classes.seat} id="F9" onClick={handleSeatSelect} />
          <div className={classes.seat} id="G9" onClick={handleSeatSelect} />
        </div>
      </div>
    </div>
  );
}

export default SeatLayout2;
