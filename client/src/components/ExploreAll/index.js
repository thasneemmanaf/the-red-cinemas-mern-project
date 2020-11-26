import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import axios from '../../axios';
import classes from './exploreAll.module.css';
import NavBar from '../NavBar';
import TrailerModal from '../TrailerModal';
import MoviePosters from '../MoviePosters';

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
        <MoviePosters
          type={type}
          movies={movies}
          trailerUrl={trailerUrl}
          setTrailerUrl={setTrailerUrl}
        />
      </div>
      {trailerUrl && (
        <TrailerModal trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
      )}
    </>
  );
}

export default ExploreAll;
