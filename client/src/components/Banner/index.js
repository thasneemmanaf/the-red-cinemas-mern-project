import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import axios from '../../axios';
import './Banner.css';

export default function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/movie');
      setMovies(response.data.movies);
      return response;
    }
    fetchData();
  }, []);

  // To truncate movie description in the banner
  function truncate(str, n) {
    return str.length > n ? `${str.substr(0, n - 1)}...` : str;
  }

  console.log(movies);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    initialSlide: 4,
    pauseOnDotsHover: true,
    pauseOnHover: false,
    dotsClass: 'button__bar'
  };
  return (
    <>
      <Slider {...settings}>
        {movies.map((movie) => {
          return (
            <div>
              <div
                className="banner"
                key={movie._id}
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
                    <button className="banner_button" type="button">
                      INFO
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
    </>
  );
}
