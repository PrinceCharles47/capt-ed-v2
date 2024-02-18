import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import colors from "../utils/colors";

export default function SuggestionCard({}) {
  return (
    <Card elevation={0}>
      <CardContent sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Card
          variant="outlined"
          sx={{
            p: "1rem",
            width: "4rem",
            height: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="text-lg font-bold">47</p>
          <p className="text-xs">VOTES</p>
        </Card>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Suggestion One
          </Typography>
          <Typography variant="caption">Type: Venue</Typography>
        </Box>
      </CardContent>
      <CardContent sx={{ py: "0", mb: "1rem" }}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          expedita dolore laudantium reiciendis odio. Consequatur, sunt in
          nostrum, excepturi deserunt illum, veritatis cumque ad ut maxime quos
          optio ipsam aut.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{px: "1rem"}}>
        <Typography
          variant="subtitle2"
          sx={{ fontStyle: "italic", mr: "auto", color: "gray" }}
        >
          You voted this suggestion
        </Typography>
        <Button size="small" variant="contained" sx={{ ml: "auto" }}>
          VOTE
        </Button>
      </CardActions>
    </Card>
  );
}
