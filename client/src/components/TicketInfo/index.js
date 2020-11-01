import React from 'react';

import classes from './TicketInfo.module.css';

function TicketInfo() {
  return (
    <div className={classes.card}>
      <div className={classes.upper_container}>
        <div className={classes.image_container}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyh9zCjUmJ_z-5UjbpwQnsf5lteSrkqiLLOw&usqp=CAU"
            alt="profile"
            height="100px"
            width="100px"
          />
        </div>
      </div>
      <div className={classes.lower_container}>
        <h3>Name: Manu</h3>
        <h4>Movie: Titanic</h4>
        <p>Price: 500 SEK</p>
        <p>Seats: 5D, 5F</p>
        <button className={classes.reset_button} type="button">
          RESET
        </button>
      </div>
    </div>
  );
}

export default TicketInfo;
