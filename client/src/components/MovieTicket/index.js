import React, { useContext } from 'react';
import classes from './MovieTicket.module.css';
import ReservationContext from '../../Store/ReservationContext';

function MovieTicket() {
  const [reservation] = useContext(ReservationContext);
  return (
    <div className={classes.cardWrap}>
      <div className={`${classes.card} ${classes.cardLeft}`}>
        <h1>
          Movie
          <span>Time</span>
        </h1>
        <div className={classes.title}>
          <h2>{reservation.movie}</h2>
          <span>movie</span>
        </div>
        <div className={classes.name}>
          <h2>Thachu Manu</h2>
          <span>name</span>
        </div>
        <div className={classes.date}>
          <h2>{reservation.date.format('YYYY-MM-DD')}</h2>
          <span>Date</span>
        </div>
        <div className={classes.time}>
          <h2>{reservation.startAt}</h2>
          <span>time</span>
        </div>
        <div className={classes.seat}>
          <div className={classes.seats}>
            {reservation.seats.map((seat) => {
              return <h2 key={seat}>{seat}</h2>;
            })}
          </div>
          <span>seats</span>
        </div>
      </div>
      <div className={`${classes.card} ${classes.cardRight}`}>
        <div className={classes.eye} />
        <div className={classes.screen}>
          <h3>{reservation.selectedCinema}</h3>
          <span>Screen</span>
        </div>
        <div className={classes.price}>
          <h3>500 SEK</h3>
          <span>Total</span>
        </div>
        <div className={classes.barcode} />
      </div>
    </div>
  );
}

export default MovieTicket;
