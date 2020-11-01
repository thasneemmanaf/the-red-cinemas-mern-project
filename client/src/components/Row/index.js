import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import handlePlayTrailer from '../../utils/playTrailer';
import TrailerModal from '../TrailerModal';

import axios from '../../axios';
import './Row.css';

function Row({ type }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

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

  // Conditionally render TrailerModal
  let trailerModal = null;
  if (trailerUrl) {
    trailerModal = (
      <TrailerModal trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
    );
  }

  return (
    <div className="row">
      <h2 className="row_title">{type}</h2>
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
                <button
                  type="button"
                  className="play_btn"
                  onClick={() =>
                    handlePlayTrailer(movie, trailerUrl, setTrailerUrl)
                  }>
                  PLAY
                </button>
                <button type="button" className="book_btn">
                  BOOK NOW
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={`/${type}`}>
        <button type="button" className="explore_button ">
          Explore All
        </button>
      </Link>
      {trailerModal}
    </div>
  );
}

export default Row;
