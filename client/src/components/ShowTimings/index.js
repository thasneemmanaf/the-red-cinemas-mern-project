import React, { useEffect, useContext } from 'react';

import axios from '../../axios';
import ReservationContext from '../../Store/ReservationContext';
import ScreenSelector from '../ScreenSelector';
import BookingCalendar from '../BookingCalender';
import classes from './ShowTimings.module.css';

function ShowTimings(props) {
  const [reservation] = useContext(ReservationContext);

  const { movieId } = props.match.params;

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('ok');
        const response = await axios.get(`/show-timing/${movieId}`, {
          params: {
            selectedDate: reservation.date.toDate()
          }
        });
        response.data.showTimings.forEach((show) => {
          console.log(show);
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
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
        <ScreenSelector />
      </div>
    </>
  );
}

export default ShowTimings;
