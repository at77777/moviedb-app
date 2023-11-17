import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces/movieInterface";

interface IProps extends PropsWithChildren {
    movie: IMovie
}
const MoviesListCard: FC = () => {

    return (
        <div>

        </div>
    );
};

export {MoviesListCard};