import { useContext } from 'react';
import ReservationContext from '../Store/ReservationContext';

function useBookNow() {
  const [, dispatch] = useContext(ReservationContext);
  const handleBookNow = (movie) => {
    dispatch({ type: 'ADD_MOVIE_ID', payload: movie._id });
    dispatch({ type: 'ADD_MOVIE', payload: movie.title });
    dispatch({ type: 'ADD_MOVIE_IMG', payload: movie.bannerImage });
  };
  return { handleBookNow };
}

export default useBookNow;
