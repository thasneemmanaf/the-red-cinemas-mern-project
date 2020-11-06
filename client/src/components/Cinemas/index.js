import React from 'react';
// import { Link } from 'react-router-dom';

import classes from './Cinemas.module.css';

function Cinemas({ cinemas }) {
  return (
    <div className={classes.row}>
      <div className={classes.row_posters}>
        {cinemas.map((cinema) => {
          return (
            <div className={classes.poster_container} key={cinema.screenId}>
              <img
                className={classes.row_poster}
                src={cinema.image}
                alt={cinema.name}
              />
              <div className={classes.movie_info}>
                <h3>{cinema.name}</h3>
                <h4>{`Show Time:${cinema.startAt}`}</h4>
              </div>
              <div className={classes.poster_actions}>
                <button type="button" className={classes.book_btn}>
                  BOOK NOW
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cinemas;
