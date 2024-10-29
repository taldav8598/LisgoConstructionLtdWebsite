import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import "./Item.css";

export default function Item({ item }) {
  return (
    <Paper>
      <div className="reviewContainer">
        <Typography variant="span" className="review">
          {item.review}
        </Typography>
        <Typography className="reviewName" variant="span">
          {item.name}
        </Typography>
      </div>
    </Paper>
  );
}
