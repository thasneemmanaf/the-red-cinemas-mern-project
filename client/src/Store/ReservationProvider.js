import React, { useReducer } from 'react';
import ReservationContext from './ReservationContext';

const initialState = {
  movieId: '',
  movie: ''
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
