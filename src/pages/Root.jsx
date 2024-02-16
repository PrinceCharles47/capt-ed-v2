import { Outlet } from "react-router-dom";
import NavigationDrawer from "./NavigationDrawer";

export default function Root({}) {
  return (
    <>
      <NavigationDrawer>
        <Outlet />
      </NavigationDrawer>
    </>
  );
}
