/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import classes from './ScreenSelector.module.css';
import ReservationContext from '../../Store/ReservationContext';

function ScreenSelector({ cinemas }) {
  const [reservation, dispatch] = useContext(ReservationContext);

  let cinemaNames = cinemas.map((cinema) => {
    return cinema.name;
  });

  // Remove duplicate cinema names and Select screen as placeholder
  cinemaNames = ['Select screen', ...new Set(cinemaNames)];

  const handleOnChange = (e) => {
    dispatch({ type: 'ADD_SELECTED_CINEMA', payload: e.target.value });
  };
  console.log(reservation.selectedCinema);

  return (
    <div className={classes.box}>
      <select value={reservation.selectedCinema} onChange={handleOnChange}>
        {cinemaNames.map((cinemaName) => {
          return (
            <Option
              key={cinemaName}
              value={cinemaName}
              selected={reservation.selectedCinema}
            />
          );
        })}
      </select>
    </div>
  );
}

// Generate options dynammically
const Option = ({ value }) => {
  return (
    <option value={value} disabled={value === 'Select screen'}>
      {value}
    </option>
  );
};

export default ScreenSelector;
