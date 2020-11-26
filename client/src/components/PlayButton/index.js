import React from 'react';

import { useTranslation } from 'react-i18next';

import classes from './PlayButton.module.css';
import handlePlayTrailer from '../../utils/playTrailer';

function PlayButton({ movie, trailerUrl, setTrailerUrl }) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      className={classes.play_btn}
      onClick={() => handlePlayTrailer(movie, trailerUrl, setTrailerUrl)}>
      {t('play')}
    </button>
  );
}

export default PlayButton;
