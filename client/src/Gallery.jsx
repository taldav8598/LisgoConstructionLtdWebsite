import { Typography, Pagination, Grid, Link } from "@mui/material";
import "./Gallery.css";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import imageTwo from "./assets/imageTwo.jpg";
import imageSeven from "./assets/imageSeven.jpg";

export default function Gallery() {
  const [page, setPage] = useState(1);

  const imageLinks = {
    1: [imageTwo, imageSeven],
    2: [
      "https://i.natgeofe.com/n/da0bcdca-34f9-40d9-bda8-86709c75fdf2/MM10127_231214_10486_2x3.jpg?w=718&h=1077",
      "https://i.natgeofe.com/n/da0bcdca-34f9-40d9-bda8-86709c75fdf2/MM10127_231214_10486_2x3.jpg?w=718&h=1077",
    ],
    3: [],
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <Typography variant="h3">Gallery</Typography>
        <div className="pagination">
          <Pagination
            page={page}
            onChange={handleChange}
            count={5}
            size="large"
          />
        </div>
        <Grid
          className="images-container"
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid item size="stretch">
            <Typography variant="h4">Before</Typography>
            <img className="before-image" src={imageLinks[page][0]} alt="" />
          </Grid>
          <Grid size="stretch">
            <Typography variant="h4">After</Typography>
            <img className="after-image" src={imageLinks[page][1]} alt="" />
          </Grid>
        </Grid>
        {/* <div className='pagination'>
                <Pagination  page={page} onChange={handleChange} count={5} size="large" />
                </div> */}

        <div
          onClick={() => document.getElementById("enquire").scrollIntoView()}
          className="cheveron-container"
        >
          <ExpandLessIcon className="cheveron" color="white" />
          <Typography href="#enquire" className="enquire-now-link" variant="h5">
            <Link href="#enquire">Enquire now</Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
