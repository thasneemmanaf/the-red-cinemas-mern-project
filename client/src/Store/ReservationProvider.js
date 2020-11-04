import React, { useReducer } from 'react';
import moment from 'moment';
import ReservationContext from './ReservationContext';

const initialState = {
  movieId: '',
  movie: '',
  movieImg: '',
  date: moment(),
  startAt: '',
  ticketPrice: 0,
  screenId: '',
  emailId: '',
  name: '',
  seats: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_ID':
      return {
        ...state,
        movieId: action.payload
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movie: action.payload
      };
    case 'ADD_MOVIE_IMG':
      return {
        ...state,
        movieImg: action.payload
      };
    case 'ADD_DATE':
      return {
        ...state,
        date: action.payload
      };
    default:
      return state;
  }
};

const ReservationProvider = (props) => {
  const [reservation, dispatch] = useReducer(reducer, initialState);
  return (
    <ReservationContext.Provider value={[reservation, dispatch]}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationProvider;
