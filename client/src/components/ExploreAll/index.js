import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import axios from '../../axios';
import classes from './exploreAll.module.css';
import NavBar from '../NavBar';
import TrailerModal from '../TrailerModal';
import PlayButton from '../PlayButton';
import BookNowButton from '../BookNowButton';

function ExploreAll(props) {
  const type = props.match.path.replace('/', '');
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/movie', {
        params: { type, limit: 16 }
      });
      setMovies(response.data.movies);
      return response;
    }
    fetchData();
  }, [type]);

  return (
    <>
      <NavBar />
      <div className={classes.row}>
        <h2 className={classes.row_title}>{t(type)}</h2>
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
                  <h3>{movie.title}</h3>
                  <h4>{`${movie.originalLanguage} . ${movie.genre}`}</h4>
                </div>
                <div className={classes.poster_actions}>
                  <PlayButton
                    movie={movie}
                    trailerUrl={trailerUrl}
                    setTrailerUrl={setTrailerUrl}
                  />

                  {type === 'playingnow' && <BookNowButton movie={movie} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {trailerUrl && (
        <TrailerModal trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
      )}
    </>
  );
}

export default ExploreAll;
