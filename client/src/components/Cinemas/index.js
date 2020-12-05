import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './Cinemas.module.css';
import ReservationContext from '../../Store/ReservationContext';

function Cinemas({ cinemas, selectScreen }) {
  const [, dispatch] = useContext(ReservationContext);
  let newCinemas = [...cinemas];

  const { t } = useTranslation();

  // Filter cinemas based on user cinema selection
  if (
    selectScreen !== 'All Screens' &&
    selectScreen !== 'Alla Teatrar' &&
    selectScreen !== 'തിയേറ്ററുകൾ'
  ) {
    newCinemas = cinemas.filter((cinema) => {
      return selectScreen === cinema.name;
    });
  } else {
    newCinemas = [...cinemas];
  }

  const handleBookNow = (cinema) => {
    dispatch({ type: 'ADD_START_AT', payload: cinema.startAt });
    dispatch({ type: 'ADD_TICKET_PRICE', payload: cinema.ticketPrice });
    dispatch({ type: 'ADD_SEAT_LAYOUT', payload: cinema.seats });
    dispatch({ type: 'ADD_CINEMA_ID', payload: cinema.screenId });
    dispatch({ type: 'ADD_SHOWTIME_ID', payload: cinema.showTimeId });
    dispatch({ type: 'ADD_SELECTED_CINEMA', payload: cinema.name });
  };

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
                <h3>{`${cinema.name}, ${cinema.city} `}</h3>
                <h4>{`${t('show_time')}:${cinema.startAt}`}</h4>
              </div>
              <Link to="/booking">
                <div className={classes.poster_actions}>
                  <button
                    type="button"
                    className={classes.book_btn}
                    onClick={() => handleBookNow(cinema)}>
                    {t('book_now')}
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
