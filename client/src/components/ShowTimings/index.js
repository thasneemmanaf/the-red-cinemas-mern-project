import React, { useEffect, useContext, useState } from 'react';

import axios from '../../axios';
import ReservationContext from '../../Store/ReservationContext';
import ScreenSelector from '../ScreenSelector';
import BookingCalendar from '../BookingCalendar';
import classes from './ShowTimings.module.css';
import Cinemas from '../Cinemas';

function ShowTimings(props) {
  const [reservation] = useContext(ReservationContext);
  const [cinemas, setCinemas] = useState([]);

  const { movieId } = props.match.params;

  useEffect(() => {
    async function fetchData() {
      console.log(reservation.date.toDate());
      try {
        const response = await axios.get(`/show-timing/${movieId}`, {
          params: {
            selectedDate: reservation.date.toDate()
          }
        });
        response.data.showTimings.forEach((show) => {
          setCinemas((prevCinemas) => [
            ...prevCinemas,
            {
              showId: show.screenId + show.startAt,
              screenId: show.screenId,
              name: show.screen_details[0].name,
              startAt: show.startAt,
              ticketPrice: show.screen_details[0].ticketPrice,
              city: show.screen_details[0].city,
              image: show.screen_details[0].image
            }
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    return () => setCinemas([]);
  }, [reservation.date]);

  return (
    <div className={classes.container}>
      <div
        className={classes.banner}
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(
        ${reservation.movieImg}
        )`,
          backgroundPosition: 'center cover'
        }}>
        <div className={classes.banner_contents}>
          <h1 className={classes.banner_title}>{reservation.movie}</h1>
        </div>
        <div className={classes.banner_fadeBottom} />
      </div>
      <div className={classes.selectors}>
        <BookingCalendar />
        <ScreenSelector cinemas={cinemas} />
      </div>
      <Cinemas cinemas={cinemas} />
    </div>
  );
}

export default ShowTimings;
