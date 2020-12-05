import React, { useState, useContext } from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components';
import { SingleDatePicker } from 'react-dates';
import ReservationContext from '../../Store/ReservationContext';

const StyledDatePickerWrapper = styled.div`
  & .SingleDatePicker,
  .SingleDatePickerInput {
    display: flex;
    max-width: 120px;
    background: rgba(51, 51, 51, 0.5);
    color: #fff;
    border-radius: 12px;
    .DateInput {
      width: 40%;
      height: 45px;
      display: flex;

      .DateInput_input {
        font-size: 1rem;
        border-bottom: 0;
        padding: 0 !important;
        background: rgb(41, 41, 41);
        color: #fff;
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
    }
  }
`;

function BookingCalendar() {
  const [focused, setFocused] = useState(false);
  const [reservation, dispatch] = useContext(ReservationContext);

  const handleDateChange = (dateSelected) => {
    dispatch({ type: 'ADD_DATE', payload: dateSelected });
    setFocused(false);
  };

  return (
    <StyledDatePickerWrapper>
      <SingleDatePicker
        date={reservation.date}
        numberOfMonths={1}
        daySize={35}
        displayFormat="MMM D"
        showDefaultInputIcon
        onDateChange={handleDateChange}
        focused={focused}
        noBorder
        regular
        keepOpenOnDateSelect
        onFocusChange={() => setFocused(true)}
        id="date_selector"
      />
    </StyledDatePickerWrapper>
  );
}

export default BookingCalendar;
