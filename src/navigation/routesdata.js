import Home from "../pages/home";
import Flight from "../pages/flight";
import ErrorPage from "./errorpage";

const ROUTESDATA = [
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/flight",
    element: <Flight />,
    errorElement: <ErrorPage />,
  },
];

export default ROUTESDATA;
