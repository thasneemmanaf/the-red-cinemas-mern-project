import React, { useEffect, useContext, useState } from 'react';

import axios from '../../axios';
import ReservationContext from '../../Store/ReservationContext';
import ScreenSelector from '../ScreenSelector';
import BookingCalendar from '../BookingCalendar';
import classes from './ShowTimings.module.css';
import Cinemas from '../Cinemas';
import { setLocalStorage } from '../../utils/localStorage';

function ShowTimings(props) {
  const [reservation] = useContext(ReservationContext);
  const [cinemas, setCinemas] = useState([]);
  const [selectScreen, setSelectScreen] = useState('All Screens');

  const { movieId } = props.match.params;

  // Set local storage with banner image
  useEffect(() => {
    setLocalStorage('reservation', reservation);
  }, []);

  // Fetch Show timing based on user's date selection
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/show-timing/${movieId}`, {
          params: {
            selectedDate: reservation.date.format('YYYY-MM-DD')
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
              image: show.screen_details[0].image,
              seats: show.screen_details[0].seats,
              showTimeId: show._id
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
        <ScreenSelector cinemas={cinemas} setSelectScreen={setSelectScreen} />
      </div>
      <Cinemas cinemas={cinemas} selectScreen={selectScreen} />
    </div>
  );
}

export default ShowTimings;
