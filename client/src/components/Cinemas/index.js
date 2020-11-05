import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import axios from '../../axios';

import classes from './Cinemas.module.css';

function Cinemas({ type }) {
  const [movies, setMovies] = useState([]);

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
