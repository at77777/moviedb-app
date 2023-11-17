import {IRes} from "../types/IResType";
import {IMovie} from "../interfaces/movieInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IPagination} from "../interfaces/paginationInterface";

const movieService = {
    getAll: (): IRes<IPagination<IMovie>> => axiosService.get(urls.movies.base)
};

export {movieService};