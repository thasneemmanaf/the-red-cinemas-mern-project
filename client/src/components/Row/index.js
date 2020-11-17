import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import handlePlayTrailer from '../../utils/playTrailer';
import TrailerModal from '../TrailerModal';

import axios from '../../axios';

import classes from './Row.module.css';

function Row({ type }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const { t } = useTranslation();

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

  // Handle book now
  const handleBookNow = () => {
    i18next.changeLanguage('sv');
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
                <h3>TITANIC</h3>
                <h4>ENGLISH . ROMANTIC</h4>
              </div>
              <div className={classes.poster_actions}>
                <button
                  type="button"
                  className={classes.play_btn}
                  onClick={() =>
                    handlePlayTrailer(movie, trailerUrl, setTrailerUrl)
                  }>
                  PLAY
                </button>
                <button
                  type="button"
                  className={classes.book_btn}
                  onClick={handleBookNow}>
                  BOOK NOW
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={`/${type}`}>
        <button type="button" className={classes.explore_button}>
          Explore All
        </button>
      </Link>
      {trailerUrl && (
        <TrailerModal trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
      )}
    </div>
  );
}

export default Row;
