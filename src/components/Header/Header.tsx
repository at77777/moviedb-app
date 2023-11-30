import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { movieActions } from "../../redux/slices/movieSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.movies);
  const { name } = genres;

  useEffect(() => {
    dispatch(movieActions.getGenres());
  }, []);

  console.log(genres);

  return (
    <div>
      {genres.map((genre) => (
        <div>{name}</div>
      ))}
    </div>
  );
};

export { Header };
