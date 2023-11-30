import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

const MoviesPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export { MoviesPage };
