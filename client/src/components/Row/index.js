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
            <img
              key={movie._id}
              className="row_poster"
              src={movie.posterImage}
              alt={movie.name}
            />
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
