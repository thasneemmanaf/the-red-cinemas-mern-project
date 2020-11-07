import React from 'react';
import './SeatLayout2.css';

function SeatLayout2() {
  return (
    <div className="theatre">
      <div className="cinema-seats left">
        <div className="cinema-row row-1">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>

        <div className="cinema-row row-2">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>

        <div className="cinema-row row-3">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>

        <div className="cinema-row row-4">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>

        <div className="cinema-row row-5">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>

        {/* <div className="cinema-row row-6">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div> */}

        {/* <div className="cinema-row row-7">
          <div className="seat" />
          <div className="seat" />
          <div className="seat active" />
          <div className="seat" />
          <div className="seat" />
        </div> */}
      </div>

      <div className="cinema-seats right">
        <div className="cinema-row row-1">
          <div className="seat active" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>

        <div className="cinema-row row-2">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat active" />
          <div className="seat" />
          <div className="seat" />
        </div>

        <div className="cinema-row row-3">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>

        <div className="cinema-row row-4">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>

        <div className="cinema-row row-5">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div>

        {/* <div className="cinema-row row-6">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div> */}

        {/* <div className="cinema-row row-7">
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
          <div className="seat" />
        </div> */}
      </div>
    </div>
  );
}

export default SeatLayout2;
