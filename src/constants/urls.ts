const baseURL = "https://api.themoviedb.org/3/";

const movies = "/discover/movie";
const genres = "/genre/movie/list";

const urls = {
  movies: {
    base: movies,
  },
  genres,
};

export { baseURL, urls };
