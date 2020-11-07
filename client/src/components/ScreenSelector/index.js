/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import classes from './ScreenSelector.module.css';

function ScreenSelector({ cinemas }) {
  const [selectedValue, setSelectedValue] = useState('');

  let cinemaNames = cinemas.map((cinema) => {
    return cinema.name;
  });

  // Remove duplicate cinema names
  cinemaNames = [...new Set(cinemaNames)];

  const handleOnChange = (e) => {
    setSelectedValue(e.target.value);
  };
  console.log(selectedValue);

  return (
    <div className={classes.box}>
      <select value={selectedValue} onChange={handleOnChange}>
        <option selected disabled>
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
