import React from "react";
import Root from "../pages/root";
import ROUTESDATA from "./routesdata";
import { Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        {ROUTESDATA.map(({ path, element }) => (
          <Route key={path} path={`/${path}`} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default Router;
