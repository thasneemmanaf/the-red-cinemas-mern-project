import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Showcase.module.css';

function Showcase() {
  const { t } = useTranslation();

  return (
    <ul className={classes.showcase}>
      <li>
        <div className={`${classes.seat} ${classes.available}`} />
        <small>{t('available')}</small>
      </li>
      <li>
        <div className={`${classes.seat} ${classes.selected}`} />
        <small>{t('selected')}</small>
      </li>
      <li>
        <div className={classes.seat} />
        <small>{t('unavailable')}</small>
      </li>
    </ul>
  );
}

export default Showcase;
