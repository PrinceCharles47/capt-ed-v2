import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/home/HomePage";

const home = {
  path: "/",
  element: <HomePage />,
};

const root = {
  element: <Root />,
  children: [home],
};

const routes = [root];

export default createBrowserRouter(routes);
