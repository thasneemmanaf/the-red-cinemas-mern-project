import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import movieTrailer from 'movie-trailer';

import TrailerModal from '../TrailerModal';
import axios from '../../axios';
import './Banner.css';

export default function Banner() {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/movie', {
        params: { type: 'playingnow', limit: 8 }
      });
      setMovies(response.data.movies);
      return response;
    }
    fetchData();
  }, []);

  // To truncate movie description in the banner
  function truncate(str, n) {
    return str.length > n ? `${str.substr(0, n - 1)}...` : str;
  }

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    initialSlide: 0,
    pauseOnDotsHover: true,
    pauseOnHover: false,
    dotsClass: 'button__bar'
  };

  // To play trailer
  const handlePlayTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie.title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  let trailerModal = null;
  if (trailerUrl) {
    trailerModal = (
      <TrailerModal trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
    );
  }

  return (
    <>
      <Slider {...settings}>
        {movies.map((movie) => {
          return (
            <div key={movie._id}>
              <div
                className="banner"
                style={{
                  backgroundSize: 'cover',
                  backgroundImage: `url(
        ${movie.bannerImage}
        )`,
                  backgroundPosition: 'center cover'
                }}>
                <div className="banner_contents ">
                  <h1 className="banner_title">{movie.title}</h1>
                  <div className="banner_buttons">
                    <button
                      className="banner_button"
                      type="button"
                      onClick={() => handlePlayTrailer(movie)}>
                      PLAY
                    </button>
                    <button className="banner_button" type="button">
                      BOOK NOW
                    </button>
                  </div>
                  <h1 className="banner_description">
                    {movie.description && truncate(movie.description.en, 150)}
                  </h1>
                </div>
                <div className="banner_fadeBottom" />
              </div>
            </div>
          );
        })}
      </Slider>
      {trailerModal}
    </>
  );
}
