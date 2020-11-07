import React from 'react';

import classes from './Showcase.module.css';

function Showcase() {
  return (
    <ul className={classes.showcase}>
      <li>
        <div className={`${classes.seat} ${classes.available}`} />
        <small>Available</small>
      </li>
      <li>
        <div className={`${classes.seat} ${classes.selected}`} />
        <small>Selected</small>
      </li>
      <li>
        <div className={classes.seat} />
        <small>Unavailable</small>
      </li>
    </ul>
  );
}

export default Showcase;
