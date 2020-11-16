import React from 'react';
import classes from './LanguageSelector2.module.css';

function LanguageSelector2() {
  return (
    <div>
      <select className={classes.select}>
        <option value="svenska" className={classes.sv}>
          Svenska
        </option>
        <option value="english" className={classes.en}>
          English
        </option>
        <option value="malayalam" className={classes.ml}>
          മലയാളം
        </option>
      </select>
    </div>
  );
}

export default LanguageSelector2;
