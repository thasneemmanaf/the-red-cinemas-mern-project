import React from 'react';
import './SeatLayout.css';
import SeatLayout2 from '../SeatLayout2';

function SeatLayout() {
  return (
    <>
      <ul className="showcase">
        <li>
          <div className="seat" />
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected" />
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied" />
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container">
        <div className="screen" />
        {/* <SeatLayout2 /> */}
        <div className="row">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>
        <div className="row">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>
        <div className="row">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat occupied" />
          <div className="seat occupied" />
        </div>
        <div className="row">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>
        <div className="row">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat occupied" />
          <div className="seat occupied" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>
      </div>
    </>
  );
}

export default SeatLayout;
