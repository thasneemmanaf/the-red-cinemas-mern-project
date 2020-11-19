const dispatchActions = (dispatch, localReservation) => {
  console.log(localReservation);
  dispatch({
    type: 'ADD_MOVIE',
    payload: localReservation.movie
  });
};

export default dispatchActions;
