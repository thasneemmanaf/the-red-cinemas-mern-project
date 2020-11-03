/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import classes from './ScreenSelector.module.css';

function ScreenSelector() {
  const [active, setActive] = useState(false);
  const [select, setSelect] = useState('');

  return (
    <div className={classes.container}>
      <div className={classes.select_box}>
        <div
          className={`${classes.options_container} ${
            active && classes.active
          }`}>
          <div className={classes.option}>
            <input
              type="radio"
              className={classes.radio}
              id="screenA"
              name="category"
              value="screen A"
              onChange={(event) => {
                setSelect(event.target.value);
                setActive(false);
              }}
            />
            <label htmlFor="screenA">Screen A</label>
          </div>

          <div className={classes.option}>
            <input
              type="radio"
              className={classes.radio}
              id="film"
              name="category"
            />
            <label htmlFor="film">Screen B</label>
          </div>

          <div className={classes.option}>
            <input
              type="radio"
              className={classes.radio}
              id="science"
              name="category"
            />
            <label htmlFor="science">Screen C</label>
          </div>
        </div>

        <div
          className={classes.selected}
          role="button"
          onClick={() => setActive(true)}>
          {select || 'Select Screens'}
        </div>
      </div>
    </div>
  );
}

export default ScreenSelector;
