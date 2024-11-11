import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import "./Item.css";

export default function Item({ item }) {
  return (
    <Paper>
      <div className="reviewContainer">
        <div className="review">
          <Typography variant="span" className="reviewBody">
            {item.review}
          </Typography>
          <Typography className="reviewName" variant="span">
            {item.name}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
