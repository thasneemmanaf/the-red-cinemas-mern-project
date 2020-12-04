import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useBookNow from '../../hooks/useBookNow';

import classes from './BookNowButton.module.css';

function BookNowButton({ movie }) {
  const { t } = useTranslation();
  const { handleBookNow } = useBookNow();

  return (
    <Link
      to={{
        pathname: `/showtimings/${movie._id}`
      }}
      className={classes.nav_booknow_btn}>
      <button
        type="button"
        className={classes.book_btn}
        onClick={() => handleBookNow(movie)}>
        {t('book_now')}
      </button>
    </Link>
  );
}

export default BookNowButton;
