import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/home/HomePage";
import EventDetailsPage from "../pages/events/EventDetailsPage";
import EventsPage from "../pages/events/EventsPage";
import CommunitiesPage from "../pages/community/CommunitiesPage";

// const home = {
//   path: "/",
//   element: <HomePage />,
// };

const events = {
  path: "/events",
  element: <EventsPage />,
};

const communities = {
  path: "/communities",
  element: <CommunitiesPage />,
};

const eventDetails = {
  path: "/",
  element: <EventDetailsPage />,
};

const home = {
  element: <HomePage />,
  children: [events, eventDetails],
};

const root = {
  element: <Root />,
  children: [home, communities],
};

const routes = [root];

export default createBrowserRouter(routes);
