import { Typography, Grid, Link } from "@mui/material";
import "./AboutUs.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function AboutUs() {
  return (
    <section id="about-us" className="about-us-section" aria-label="About us">
      <Typography className="header" variant="h1">
        About us
      </Typography>
      <div className="about-container">
        <Grid className="first-journey-part" container spacing={2}>
          <Grid
            className="inner-journey-part-one"
            item
            xs={6}
            sx={{ textAlign: "center" }}
          >
            <p className="info">
              Welcome to Lisgo, where craftmanship meets dedication and
              excellence.
            </p>
          </Grid>
          <Grid className="empty-grid-item" item xs={6}></Grid>
        </Grid>
        <br className="horizontal-line" />
        <Grid className="first-journey-part" container spacing={2}>
          <Grid className="empty-grid-item" item xs={4}>
            <p></p>
          </Grid>
          <br className="border" />
          <Grid
            className="inner-journey-part-two"
            item
            xs={8}
            sx={{ textAlign: "center" }}
          >
            <p className="info">
              We are not just builders; we are creators of spaces that inspire,
              innovate, and endure.
            </p>
          </Grid>
        </Grid>
        <p className="last-journey-part">
          With 4 years in the industry, we have honed our expertise to deliver
          exceptional construction solutions tailored to meet your unique needs.
        </p>
      </div>
      <br />
      <br />
      <div className="mention-container">
        <Typography className="header" variant="h2">
          Testimonials
        </Typography>
        <div className="mention">
          <p>
            <i>
              Exceptional craftsmanship and attention to detail! From concept to
              completion, this construction company delivered beyond
              expectations. Highly recommended for any project. Exceptional
              craftsmanship and attention to detail! From concept to completion,
              this construction company delivered beyond expectations. Highly
              recommended for any project.
            </i>
          </p>
          <p>
            <i>
              Exceptional craftsmanship and attention to detail! From concept to
              completion, this construction company delivered beyond
              expectations. Highly recommended for any project. Exceptional
              craftsmanship and attention to detail! From concept to completion,
              this construction company delivered beyond expectations. Highly
              recommended for any project.
            </i>
          </p>
          <p>
            <i>
              Exceptional craftsmanship and attention to detail! From concept to
              completion, this construction company delivered beyond
              expectations. Highly recommended for any project. Exceptional
              craftsmanship and attention to detail! From concept to completion,
              this construction company delivered beyond expectations. Highly
              recommended for any project.
            </i>
          </p>
        </div>
      </div>

      <div
        onClick={() => document.getElementById("enquire").scrollIntoView()}
        className="cheveron-container"
        aria-label="Enquire now cheveron"
      >
        <ExpandLessIcon className="cheveron" color="white" />
        <Typography href="#enquire" className="enquire-now-link" variant="h2">
          <Link href="#enquire">Enquire now</Link>
        </Typography>
      </div>
    </section>
  );
}
