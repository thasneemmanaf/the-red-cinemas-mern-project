import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './Banner.css';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/movie');
      setMovie(
        response.data.movies[
          Math.floor(Math.random() * response.data.movies.length)
        ]
      );
      return response;
    }
    fetchData();
  }, []);

  // To truncate movie description in the banner
  //   function truncate(str, n) {
  //     return str.length > n ? `${str.substr(0, n - 1)}...` : str;
  //   }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
        ${movie.bannerImage}
        )`,
        backgroundPosition: 'center center'
      }}>
      <div className="banner_contents ">
        <h1 className="banner_title">{movie.title}</h1>
        <div className="banner_buttons">
          <button className="banner_button" type="button">
            Play
          </button>
          <button className="banner_button" type="button">
            My List
          </button>
        </div>
        {/* <h1 className="banner_description">
          {truncate(movie.description, 150)}
        </h1> */}
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}
