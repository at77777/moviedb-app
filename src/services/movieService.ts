import {IRes} from "../types/IResType";
import {IMovie} from "../interfaces/movieInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const movieService = {
    getAll: (): IRes<IMovie[]> => axiosService.get(urls.movies.base)
};

export {movieService};