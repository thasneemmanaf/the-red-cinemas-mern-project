import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useBookNow from '../../hooks/useBookNow';

import classes from './BookNowButton.module.css';

function BookNowButton({ movie }) {
  const { t } = useTranslation();
  const { handleBookNow } = useBookNow();

  return (
    <NavLink
      to={`/showtimings/${movie._id}`}
      className={classes.nav_booknow_btn}>
      <button
        type="button"
        className={classes.book_btn}
        onClick={() => handleBookNow(movie)}>
        {t('book_now')}
      </button>
    </NavLink>
  );
}

export default BookNowButton;
