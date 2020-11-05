import React from 'react';
import classes from './BookingForm.module.css';
import BookingCalendar from '../BookingCalendar';
import ScreenSelector from '../ScreenSelector';

function BookingForm() {
  return (
    <div className={classes.form}>
      <BookingCalendar />
      <div className={classes.option_selectors}>
        <ScreenSelector className={classes.screen_selector} />
        <ScreenSelector className={classes.time_selector} />
      </div>
    </div>
  );
}

export default BookingForm;
