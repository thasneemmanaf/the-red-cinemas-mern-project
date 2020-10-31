import React, { useState, useEffect } from 'react';

import axios from '../../axios';
import classes from './comingSoon.module.css';
import NavBar from '../NavBar';

function ComingSoon() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/movie');
      setMovies(response.data.movies);
      return response;
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className={classes.row}>
        <h2 className={classes.row_title}>COMING SOON</h2>
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
                  <button type="button" className={classes.play_btn}>
                    PLAY TRAILER
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
