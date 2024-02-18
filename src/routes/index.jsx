import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/home/HomePage";
import EventsPage from "../pages/events/EventsPage";

// const home = {
//   path: "/",
//   element: <HomePage />,
// };

const events = {
  path: "/",
  element: <EventsPage />,
};

const home = {
  element: <HomePage />,
  children: [events],
};

const root = {
  element: <Root />,
  children: [home],
};

const routes = [root];

export default createBrowserRouter(routes);
