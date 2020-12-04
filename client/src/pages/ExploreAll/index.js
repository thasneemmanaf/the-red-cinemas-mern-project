import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import axios from '../../axios';
import classes from './exploreAll.module.css';
import NavBar from '../../components/NavBar';
import TrailerModal from '../../components/TrailerModal';
import MoviePosters from '../../components/MoviePosters';
import Footer from '../../components/Footer';

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
      <Footer />
      {trailerUrl && (
        <TrailerModal trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
      )}
    </>
  );
}

export default ExploreAll;
