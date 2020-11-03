import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

function BookingCalender() {
  const [date, setDate] = useState();
  const [focused, setFocused] = useState(false);

  const handleDateChange = (dateSelected) => {
    console.log(dateSelected);
    setDate(dateSelected);
    setFocused(false);
  };

  return (
    <div>
      <SingleDatePicker
        date={date}
        numberOfMonths={1}
        daySize={35}
        displayFormat="MMM D"
        showDefaultInputIcon
        onDateChange={handleDateChange}
        focused={focused}
        noBorder
        regular
        autoFocus
        keepOpenOnDateSelect
        // eslint-disable-next-line no-shadow
        onFocusChange={({ focused }) => setFocused({ focused })}
        id="your_unique_id" // PropTypes.string.isRequired,
      />
    </div>
  );
}

export default BookingCalender;
