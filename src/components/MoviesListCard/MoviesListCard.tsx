import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../interfaces/movieInterface";

interface IProps extends PropsWithChildren {
  movie: IMovie;
}
const MoviesListCard: FC<IProps> = ({ movie }) => {
  const { id, title, release_date } = movie;

  return (
    <div>
      <Link to={id.toString()}>{title}</Link>
      <div>{release_date}</div>
    </div>
  );
};

export { MoviesListCard };
