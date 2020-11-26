import React from 'react';
import classes from './MoviePosters.module.css';

import PlayButton from '../PlayButton';
import BookNowButton from '../BookNowButton';

function MoviePosters({ type, movies, trailerUrl, setTrailerUrl }) {
  return (
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
  );
}

export default MoviePosters;
