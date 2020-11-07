import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './Cinemas.module.css';
import ReservationContext from '../../Store/ReservationContext';

function Cinemas({ cinemas }) {
  const [reservation] = useContext(ReservationContext);
  let newCinemas = [...cinemas];

  // Filter cinemas based on user cinema selection
  if (reservation.selectedCinema !== 'Select screen') {
    newCinemas = cinemas.filter((cinema) => {
      return reservation.selectedCinema === cinema.name;
    });
  }

  return (
    <div className={classes.row}>
      <div className={classes.row_posters}>
        {newCinemas.map((cinema) => {
          return (
            <div className={classes.poster_container} key={cinema.showId}>
              <img
                className={classes.row_poster}
                src={cinema.image}
                alt={cinema.name}
              />
              <div className={classes.movie_info}>
                <h3>{cinema.name}</h3>
                <h4>{`Show Time:${cinema.startAt}`}</h4>
              </div>
              <Link to="/booking">
                <div className={classes.poster_actions}>
                  <button type="button" className={classes.book_btn}>
                    BOOK NOW
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cinemas;