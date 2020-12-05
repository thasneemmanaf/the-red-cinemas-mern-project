import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ScreenSelector.module.css';

function ScreenSelector({ cinemas, setSelectScreen }) {
  const { t } = useTranslation();
  let cinemaNames = cinemas.map((cinema) => {
    return cinema.name;
  });

  // Remove duplicate cinema names and Select screen as placeholder
  cinemaNames = [t('all_screens'), ...new Set(cinemaNames)];

  const handleOnChange = (e) => {
    setSelectScreen(e.target.value);
  };

  return (
    <div className={classes.box}>
      <select onChange={handleOnChange}>
        {cinemaNames.map((cinemaName) => {
          return <Option key={cinemaName} value={cinemaName} />;
        })}
      </select>
    </div>
  );
}

// Generate options dynamically
const Option = ({ value }) => {
  return (
    <option className={classes.options} value={value}>
      {value}
    </option>
  );
};

export default ScreenSelector;
