import React from 'react';
import classes from './MovieTicket.module.css';

function MovieTicket() {
  return (
    <div className={classes.cardWrap}>
      <div className={`${classes.card} ${classes.cardLeft}`}>
        <h1>
          Movie
          <span>Time</span>
        </h1>
        <div className={classes.title}>
          <h2>How I met your Mother</h2>
          <span>movie</span>
        </div>
        <div className={classes.name}>
          <h2>Thachu Manu</h2>
          <span>name</span>
        </div>
        <div className={classes.date}>
          <h2>01/04/2020</h2>
          <span>Date</span>
        </div>
        <div className={classes.time}>
          <h2>12:00</h2>
          <span>time</span>
        </div>
        <div className={classes.seat}>
          <div className={classes.seats}>
            <h2>A1</h2>
            <h2>A2</h2>
            <h2>A3</h2>
            <h2>A4</h2>
            <h2>A5</h2>
          </div>

          <span>seats</span>
        </div>
      </div>
      <div className={`${classes.card} ${classes.cardRight}`}>
        <div className={classes.eye} />
        <div className={classes.screen}>
          <h3>SCREEN A</h3>
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
