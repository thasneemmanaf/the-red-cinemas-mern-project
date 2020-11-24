/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import i18next from 'i18next';

import classes from './LanguageSelector.module.css';

function LanguageSelector({ accountShow, setAccountShow }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLang, setSelectedLang] = useState('sv');

  let selectedElement;
  if (selectedLang === 'sv') {
    selectedElement = <div className={classes.selected_sv} />;
  } else if (selectedLang === 'en') {
    selectedElement = <div className={classes.selected_en} />;
  } else if (selectedLang === 'ml') {
    selectedElement = <div className={classes.selected_ml} />;
  }

  const handleShowOptions = () => {
    if (showOptions) {
      setShowOptions(false);
      if (accountShow) setAccountShow(false);
    } else {
      setShowOptions(true);
    }
  };

  const handleSelection = (language) => {
    i18next.changeLanguage(language);
    setSelectedLang(language);
    console.log(language);
  };

  return (
    <div className={classes.lang_menu} onClick={handleShowOptions}>
      {selectedElement}
      {setShowOptions && !accountShow && (
        <ul className={`${showOptions && classes.show_option}`}>
          <li>
            <div className={classes.sv} onClick={() => handleSelection('sv')}>
              Svenska
            </div>
          </li>
          <li>
            <div className={classes.en} onClick={() => handleSelection('en')}>
              English
            </div>
          </li>
          <li>
            <div className={classes.ml} onClick={() => handleSelection('ml')}>
              മലയാളം
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
