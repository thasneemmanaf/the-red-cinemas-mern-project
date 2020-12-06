import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './PageNotFound.module.css';

function PageNotFound() {
  const { t } = useTranslation();
  return (
    <div className={classes.outer_container}>
      <div className={classes.container}>
        <h2>{t('page_not_found')}</h2>
        <h1>404</h1>
        <p>{t('page_not_found_msg')}</p>
        <a href="http://theredcinemas.herokuapp.com/">{t('go_back_home')}</a>
      </div>
    </div>
  );
}

export default PageNotFound;
