import React, { useState, useEffect } from 'react';
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
                src={movie.posterImage}
                alt={movie.name}
              />
              <div className="poster_actions">
                <button type="button" className="book_btn">
                  BOOK NOW
                </button>
                <button type="button" className="play_btn">
                  TRAILER
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button type="button" className="explore_button ">
        Explore All
      </button>
    </div>
  );
}

export default Row;
