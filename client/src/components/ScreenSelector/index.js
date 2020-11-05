/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classes from './ScreenSelector.module.css';

function ScreenSelector({ cinemas }) {
  console.log(cinemas);
  return (
    <div className={classes.box}>
      <select>
        <option defaultValue="" disabled>
          Select screen
        </option>
        {cinemas.map((cinema) => {
          return <option>{cinema.name}</option>;
        })}
        {/* <option>Screen A</option>
        <option>Screen B</option>
        <option>Screen C</option> */}
      </select>
    </div>
  );
}

export default ScreenSelector;
