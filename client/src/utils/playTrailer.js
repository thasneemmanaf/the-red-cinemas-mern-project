import movieTrailer from 'movie-trailer';

// To play trailer
const handlePlayTrailer = (movie, trailerUrl, setTrailerUrl) => {
  if (trailerUrl) {
    setTrailerUrl('');
  } else {
    movieTrailer(movie.title || '')
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch(() => setTrailerUrl(''));
  }
};

export default handlePlayTrailer;
