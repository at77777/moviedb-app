import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

interface IProps extends PropsWithChildren {
}

const MoviesList: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.getALL())
        }, [])

    console.log(movies)

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};