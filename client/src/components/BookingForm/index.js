import React from 'react';
import classes from './BookingForm.module.css';
import BookingCalender from '../BookingCalender';
import ScreenSelector from '../ScreenSelector';

function BookingForm() {
  return (
    <div className={classes.form}>
      <BookingCalender />
      <div className={classes.option_selectors}>
        <ScreenSelector className={classes.screen_selector} />
        <ScreenSelector className={classes.time_selector} />
      </div>
    </div>
  );
}

export default BookingForm;
