import React from 'react';
import moment from 'moment';
import SeatLayout from '../SeatLayout';
import BookingForm from '../BookingForm';
import BookingCheckout from '../BookingCheckout';
// import TicketInfo from '../TicketInfo';
import MovieTicket from '../MovieTicket';
import classes from './Booking.module.css';

function Booking(props) {
  const { id } = props.match.params;
  const today = moment().startOf('day');
  console.log(id);
  console.log(moment(today).endOf('day').toDate());
  return (
    <div className={classes.container}>
      <div className={classes.container_center}>
        <div className={classes.movie_image}>
          <img
            className={classes.movie_img}
            src="https://image.tmdb.org/t/p/original//qTrpw2ZUvN7ywUu1kieEsvNDrgQ.jpg"
            alt="movie-img"
          />
        </div>
        <div className={classes.movie_info}>
          <img
            className={classes.movie_img}
            src="https://image.tmdb.org/t/p/original//qTrpw2ZUvN7ywUu1kieEsvNDrgQ.jpg"
            alt="movie-img"
          />
        </div>
        <div className={classes.booking_form}>
          <BookingForm />
        </div>
        <div className={classes.seat_layout}>
          <SeatLayout />
        </div>
        <div className={classes.ticket_info}>
          {/* <TicketInfo /> */}
          <MovieTicket />
        </div>
        <div className={classes.checkout_panel}>
          <BookingCheckout />
        </div>
      </div>
    </div>
  );
}

export default Booking;
