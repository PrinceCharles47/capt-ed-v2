import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/home/HomePage";
import EventDetailsPage from "../pages/events/EventDetailsPage";
import EventsPage from "../pages/events/EventsPage";

// const home = {
//   path: "/",
//   element: <HomePage />,
// };

const event = {
  path: "/events",
  element: <EventsPage />,
};

const eventDetails = {
  path: "/",
  element: <EventDetailsPage />,
};

const home = {
  element: <HomePage />,
  children: [event, eventDetails],
};

const root = {
  element: <Root />,
  children: [home],
};

const routes = [root];

export default createBrowserRouter(routes);
