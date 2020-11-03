import React from 'react';
import classes from './BookingForm.module.css';
import BookingCalender from '../BookingCalender';
import ScreenSelector from '../ScreenSelector';

function BookingForm() {
  return (
    <div className={classes.form}>
      <BookingCalender />
      <ScreenSelector />
    </div>
  );
}

export default BookingForm;
