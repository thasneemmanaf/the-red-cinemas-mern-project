import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import handlePlayTrailer from '../../utils/playTrailer';
import TrailerModal from '../TrailerModal';
import ReservationContext from '../../Store/ReservationContext';

import axios from '../../axios';

import classes from './Row.module.css';

function Row({ type }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [, dispatch] = useContext(ReservationContext);

  const { t } = useTranslation();

  // Fetch movies from DB based on type (Now Playing, Coming Soon)
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/movie', {
        params: { type, limit: 8 }
      });
      setMovies(response.data.movies);
      return response;
    }
    fetchData();
  }, [type]);

  // To handle movie booking and redirect to ShowTimings page
  const handleBookNow = (movie) => {
    dispatch({ type: 'ADD_MOVIE_ID', payload: movie._id });
    dispatch({ type: 'ADD_MOVIE', payload: movie.title });
    dispatch({ type: 'ADD_MOVIE_IMG', payload: movie.bannerImage });
  };

  return (
    <div className={classes.row}>
      <h2 className={classes.row_title}>{t(type)}</h2>
      <div className={classes.row_posters}>
        {movies.map((movie) => {
          return (
            <div className={classes.poster_container} key={movie._id}>
              <img
                className={classes.row_poster}
                src={movie.bannerImage}
                alt={movie.name}
              />
              <div className={classes.movie_info}>
                <h3>{movie.title}</h3>
                <h4>{`${movie.originalLanguage} . ${movie.genre}`}</h4>
              </div>
              <div className={classes.poster_actions}>
                <button
                  type="button"
                  className={classes.play_btn}
                  onClick={() =>
                    handlePlayTrailer(movie, trailerUrl, setTrailerUrl)
                  }>
                  {t('play')}
                </button>
                {type === 'playingnow' && (
                  <NavLink to={`/showtimings/${movie._id}`}>
                    <button
                      type="button"
                      className={classes.book_btn}
                      onClick={() => handleBookNow(movie)}>
                      {t('book_now')}
                    </button>
                  </NavLink>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <NavLink to={`/${type}`} className={classes.nav_link}>
        <button type="button" className={classes.explore_button}>
          {t('explore_all')}
        </button>
      </NavLink>
      {trailerUrl && (
        <TrailerModal trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
      )}
    </div>
  );
}

export default Row;
