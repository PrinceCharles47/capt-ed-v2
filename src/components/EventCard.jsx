import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import colors from "../utils/colors";

const cardTagButtons = [
  {
    name: "Venue",
    variant: "contained",
    isSelected: true
  },
  {
    name: "Theme",
    variant: "text",
    isSelected: false
  },
  {
    name: "Program",
    variant: "text",
    isSelected: false
  },
  {
    name: "Others",
    variant: "text",
    isSelected: false
  },
];

const eventDetails = {
  name: "ICP BlockChain Hackthon",
  status: "Open",
  date: "February 10, 2024",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quam, incidunt velit sequi consequuntur explicabo ea officiis accusantium a veniam blanditiis necessitatibus? Quae, beatae similique nihil iste id qui consequatur?",
};

export default function EventCard({}) {
  return (
    <Card elevation={0} variant="outlined" sx={{borderRadius: 3}}>
      <div
        className="flex items-center"
        style={{ width: "100%", height: "200px", overflow: "hidden" }}
      >
        <img
          src="assets/icp-poster.jpg"
          alt="poster"
          style={{ width: "100%" }}
        />
      </div>
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {eventDetails.name}
        </Typography>
        <Typography variant="body2">
          <span
            className="font-bold"
            style={{
              color:
                eventDetails.status.toLowerCase() === "open" ? "green" : "red",
            }}
          >
            {eventDetails.status.toUpperCase()}
          </span>{" "}
          | {eventDetails.date}
        </Typography>
        <Typography sx={{ my: "1rem" }}>{eventDetails.description}</Typography>
      </CardContent>
      <Divider />
      <CardActions
        sx={{ px: "1rem", width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        {cardTagButtons.map((btn) => (
          <Button
            key={Math.random()}
            size="small"
            fullWidth
            color="violet"
            variant={btn.variant}
          >
            {btn.name}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}
