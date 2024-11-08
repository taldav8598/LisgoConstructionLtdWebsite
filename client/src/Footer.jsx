import { Typography, Grid } from "@mui/material";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <section className="footer-container">
      <Grid container>
        <Grid item size="grow">
          <Typography variant="h6">Lisgo Construction Ltd.</Typography>
          <p className="info">
            Leading contruction company with 4 years in industry.
          </p>
          <div className="social-media-content"></div>
        </Grid>
        <Grid item size="grow">
          <Typography variant="h6">Social media</Typography>
          <div className="social-media-content">
            <InstagramIcon />
            <p>Instagram</p>
          </div>
          <div className="social-media-content">
            <FacebookIcon />
            <p>Facebook</p>
          </div>
        </Grid>
        <Grid item size="grow">
          <Typography variant="h6">Useful links</Typography>
          <p className="info">
            <a href="#">example.com</a>
          </p>
          <p className="info">
            <a href="#">example.com</a>
          </p>
        </Grid>
        <Grid item size="grow">
          <Typography variant="h6">Contact information</Typography>
          <p className="info">Manchester, WA, Lancashire/Cheshire</p>
          <p className="info">
            <a href="tel:">Phone number</a>
          </p>
          <p className="info">
            <a href="mailto:lisgoconstruction@gmail.com?subject=Enquiry">
              lisgocontruction@gmail.com
            </a>
          </p>
        </Grid>
      </Grid>
    </section>
  );
}
