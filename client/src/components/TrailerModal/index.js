import React from 'react';
import Youtube from 'react-youtube';

import classes from './TrailerModal.module.css';

const TrailerModal = ({ trailerUrl, setTrailerUrl }) => {
  // Options for Youtube trailer
  const opts = {
    height: '390',
    width: '99%',
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div
      className={classes.backdrop}
      role="button"
      tabIndex={0}
      onKeyDown={() => setTrailerUrl('')}
      onClick={() => setTrailerUrl('')}>
      <div className={classes.modalContainerFixed}>
        <div className={classes.modalContainer}>
          <div style={{ margin: 'auto', maxHeight: '440px' }}>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
