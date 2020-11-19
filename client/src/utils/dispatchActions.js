import moment from 'moment';

const dispatchActions = (dispatch, localReservation) => {
  dispatch({
    type: 'ADD_MOVIE_ID',
    payload: localReservation.movieId
  });
  dispatch({
    type: 'ADD_MOVIE',
    payload: localReservation.movie
  });
  dispatch({
    type: 'ADD_MOVIE_IMG',
    payload: localReservation.movie
  });
  dispatch({
    type: 'ADD_DATE',
    payload: moment(localReservation.date)
  });
  dispatch({
    type: 'ADD_START_AT',
    payload: localReservation.startAt
  });
  dispatch({
    type: 'ADD_SELECTED_CINEMA',
    payload: localReservation.selectedCinema
  });
  dispatch({
    type: 'ADD_CINEMA_ID',
    payload: localReservation.screenId
  });
  dispatch({
    type: 'ADD_TICKET_PRICE',
    payload: localReservation.ticketPrice
  });
  dispatch({
    type: 'ADD_SHOWTIME_ID',
    payload: localReservation.showTimeId
  });
};

export default dispatchActions;
