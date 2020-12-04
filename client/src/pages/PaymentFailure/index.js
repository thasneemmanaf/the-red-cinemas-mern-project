import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './PaymentFailure.module.css';

function PaymentFailure() {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.message}>
        <p>{t('payment_failed')}</p>
        <p>{t('try_again')}</p>
      </div>

      <div className={classes.close_button}>
        <Link to="/">
          <button className={classes.checkout_button} type="button">
            {t('close')}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentFailure;
