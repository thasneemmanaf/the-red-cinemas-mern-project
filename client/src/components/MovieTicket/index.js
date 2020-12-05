import React from 'react';
import { useTranslation } from 'react-i18next';
import truncate from '../../utils/truncate';
import classes from './MovieTicket.module.css';

function MovieTicket({ reservation }) {
  const { t } = useTranslation();

  return (
    <div className={classes.cardWrap}>
      <div className={`${classes.card} ${classes.cardLeft}`}>
        <h1>The RED Cinemas</h1>
        <div className={classes.title}>
          <h2>{truncate(reservation.movie, 30)}</h2>
          <span>{t('movie')}</span>
        </div>
        <div className={classes.name}>
          <h2>{reservation.name}</h2>
          <span>{t('name')}</span>
        </div>
        <div className={classes.date}>
          <h2>{reservation.date.format('YYYY-MM-DD')}</h2>
          <span>{t('date')}</span>
        </div>
        <div className={classes.time}>
          <h2>{reservation.startAt}</h2>
          <span>{t('time')}</span>
        </div>
        <div className={classes.seat}>
          <div className={classes.seats}>
            {reservation.selectedSeats.map((seat) => {
              return <h2 key={seat}>{seat}</h2>;
            })}
          </div>
          <span>{t('seats')}</span>
        </div>
      </div>
      <div className={`${classes.card} ${classes.cardRight}`}>
        <div className={classes.eye} />
        <div className={classes.screen}>
          <h3>{reservation.selectedCinema}</h3>
          <span>{t('screen')}</span>
        </div>
        <div className={classes.price}>
          <h3>{`${reservation.totalPrice} SEK`}</h3>
          <span>{t('total')}</span>
        </div>
        <div className={classes.barcode} />
      </div>
    </div>
  );
}

export default MovieTicket;
