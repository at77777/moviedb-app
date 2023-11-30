import { IRes } from "../types/resType";
import { IMovie } from "../interfaces/movieInterface";
import { apiService } from "./apiService";
import { urls } from "../constants/urls";
import { IPagination } from "../interfaces/paginationInterface";
import { IGenre } from "../interfaces/genresInterface";

const movieService = {
  getMovies: (): IRes<IPagination<IMovie>> => apiService.get(urls.movies.base),
  getGenres: (): IRes<IGenre> => apiService.get(urls.genres),
};

export { movieService };
