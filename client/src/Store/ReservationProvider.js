import React, { useReducer } from 'react';
import moment from 'moment';
import ReservationContext from './ReservationContext';

const initialState = {
  reservationId: '',
  movieId: '',
  movie: '',
  movieImg: '',
  date: moment(),
  startAt: '',
  ticketPrice: 0,
  totalPrice: 0,
  totalSeats: 0,
  emailId: 'gd',
  name: 'test user',
  selectedSeats: [],
  seatLayout: {},
  shows: [],
  selectedCinema: 'Select screen',
  screenId: '',
  showTimeId: '',
  paymentStatus: 'Incomplete'
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
    case 'ADD_START_AT':
      return {
        ...state,
        startAt: action.payload
      };
    case 'ADD_SELECTED_CINEMA':
      return {
        ...state,
        selectedCinema: action.payload
      };
    case 'ADD_CINEMA_ID':
      return {
        ...state,
        screenId: action.payload
      };
    case 'ADD_SEATS':
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload]
      };
    case 'REMOVE_SEATS':
      return {
        ...state,
        selectedSeats: [
          ...state.selectedSeats.filter((seat) => seat !== action.payload)
        ]
      };
    case 'ADD_TICKET_PRICE':
      return {
        ...state,
        ticketPrice: state.ticketPrice + action.payload
      };
    case 'ADD_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload
      };
    case 'DECREMENT_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload
      };
    case 'ADD_SEAT_LAYOUT':
      return {
        ...state,
        seatLayout: action.payload
      };
    case 'ADD_SHOWTIME_ID':
      return {
        ...state,
        showTimeId: action.payload
      };
    case 'ADD_RESERVATION_ID':
      return {
        ...state,
        reservationId: action.payload
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
