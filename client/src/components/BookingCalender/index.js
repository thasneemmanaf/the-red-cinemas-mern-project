import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

const StyledDatePickerWrapper = styled.div`
  & .SingleDatePicker,
  .SingleDatePickerInput {
    display: flex;
    max-width: 120px;
    .DateInput {
      width: 60%;
      height: 40px;
      display: flex;

      .DateInput_input {
        font-size: 1rem;
        border-bottom: 0;
        padding: 0 !important;
      }
    }

    .SingleDatePickerInput__withBorder {
      border-radius: 4px;
      overflow: hidden;

      :hover,
      .DateInput_input__focused {
        border: 1px solid red;
      }

      .CalendarDay__selected {
        background: blue;
        border: blueviolet;
      }
    }

    .SingleDatePicker_picker.SingleDatePicker_picker {
      top: 43px;
      left: 2px;
      /* top: 43px !important;
      left: 2px !important; */
    }
  }
`;

function BookingCalender() {
  const [date, setDate] = useState(moment());
  const [focused, setFocused] = useState(false);

  const handleDateChange = (dateSelected) => {
    console.log(dateSelected);
    setDate(dateSelected);
    setFocused(false);
  };

  console.log(moment());
  return (
    <StyledDatePickerWrapper>
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
        onFocusChange={({ focus }) => setFocused({ focus })}
        id="date_selector"
      />
    </StyledDatePickerWrapper>
  );
}

export default BookingCalender;
