import React from "react";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "../../const/routes";
// import { Button } from "../../components/button/button";
// import { Quote } from "../../components/quote/quote";
import { Main } from "../../pages/main/main";
import { Favorite } from "../../pages/favorite/favorite";

export const AppRouter = () => {
  const { undef, main, favorite } = ROUTES;
  const routes = useRoutes([
    { path: undef, element: <div>Page not found</div> },
    { path: main, element: <Main /> },
    { path: favorite, element: <Favorite /> },
  ]);
  return routes;
};
