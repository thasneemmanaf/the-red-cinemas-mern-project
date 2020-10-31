import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../axios';
import './Row.css';

function Row({ title }) {
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
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <div className="poster_container" key={movie._id}>
              <img
                className="row_poster"
                src={movie.bannerImage}
                alt={movie.name}
              />
              <div className="movie_info">
                <h3>TITANIC</h3>
                <h4>ENGLISH . ROMANTIC</h4>
              </div>
              <div className="poster_actions">
                <button type="button" className="book_btn">
                  BOOK NOW
                </button>
                <button type="button" className="play_btn">
                  PLAY TRAILER
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={`/${title}`}>
        <button type="button" className="explore_button ">
          Explore All
        </button>
      </Link>
    </div>
  );
}

export default Row;
