import React from 'react';
import classes from './BookingForm.module.css';
import BookingCalender from '../BookingCalender';

function BookingForm() {
  return (
    <div className={classes.form}>
      <BookingCalender />
    </div>
  );
}

export default BookingForm;
