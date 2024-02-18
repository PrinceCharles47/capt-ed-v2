import SuggestionCard from "../../components/SuggestionCard";
import { Box } from "@mui/material";

export default function EventsPage({}) {
  return (
    <Box component="div" sx={{display: "flex", flexDirection: "column", gap: "0.5rem"}}>
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
    </Box>
  );
}
