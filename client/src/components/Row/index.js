import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './Row.css';

function Row() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/movie');
      console.log(response.data.movies);
      setMovies(response.data.movies);
      return response;
    }
    fetchData();
  }, []);

  return (
    <div className="row">
      <h2>Playing Now</h2>
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
    </div>
  );
}

export default Row;
