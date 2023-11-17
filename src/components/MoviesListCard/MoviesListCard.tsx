import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces/movieInterface";

interface IProps extends PropsWithChildren {
    movie: IMovie
}
const MoviesListCard: FC<IProps> = ({movie}) => {
    const {title, release_date} = movie;

    return (
        <div>
            <div>{title}</div>
            <div>{release_date}</div>
        </div>
    );
};

export {MoviesListCard};