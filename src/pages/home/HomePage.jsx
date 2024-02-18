import CommunityHeader from "../../components/CommunityHeader";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function HomePage({}) {
  return (
    <>
      <CommunityHeader />
      <Box component="div" sx={{m: "1rem"}}>
        <Outlet />
      </Box>
    </>
  );
}
