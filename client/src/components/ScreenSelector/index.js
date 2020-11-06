/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classes from './ScreenSelector.module.css';

function ScreenSelector({ cinemas }) {
  let cinemaNames = cinemas.map((cinema) => {
    return cinema.name;
  });

  // Remove duplicate cinema names
  cinemaNames = [...new Set(cinemaNames)];

  return (
    <div className={classes.box}>
      <select>
        <option defaultValue="" disabled>
          Select screen
        </option>
        {cinemaNames.map((cinemaName) => {
          return <option>{cinemaName}</option>;
        })}
      </select>
    </div>
  );
}

export default ScreenSelector;
