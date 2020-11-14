import React from 'react';

import classes from './LanguageSelector.module.css';

function LanguageSelector() {
  return (
    <div className={classes.lang_menu}>
      <div className={classes.selected_lang}>Svenska</div>
      <ul>
        <li>
          <div className={classes.en}>English</div>
        </li>
        <li>
          <div className={classes.ml}>മലയാളം</div>
        </li>
      </ul>
    </div>
  );
}

export default LanguageSelector;
