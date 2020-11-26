import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import TrailerModal from '../TrailerModal';
import MoviePosters from '../MoviePosters';
import axios from '../../axios';
import classes from './Row.module.css';

function Row({ type }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

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

  return (
    <div className={classes.row}>
      <h2 className={classes.row_title}>{t(type)}</h2>
      <MoviePosters
        type={type}
        movies={movies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
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
