import {createBrowserRouter, Navigate} from "react-router-dom";
import {MoviesPage} from "./layouts/MoviesPage";
import {MoviesList} from "./components/MoviesList/MoviesList";

const router = createBrowserRouter([
    {
        path: '', element: <MoviesPage/>, children: [
            {index: true, element: <Navigate to={'movie'}/>},
            {path: 'movie', element: <MoviesList/>}
        ]
    }
])

export {router};