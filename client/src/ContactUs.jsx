import { Grid, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="contact-us-section"
      aria-label="Contact us"
    >
      <div className="contact-us-container">
        <Typography variant="h1">Contact Us</Typography>
        <Grid container className="contact-us-grid">
          <Grid size={10} className="contact-us-item-container">
            <div className="email-container">
              <EmailIcon className="email-icon" aria-label="Email icon" />
            </div>
            <Typography variant="h2">Email</Typography>
            <Typography variant="body">lisgoconstruction@gmail.com</Typography>
          </Grid>
          <Grid size={10} className="contact-us-item-container">
            <div className="phone-no-container">
              <LocalPhoneIcon className="phone-icon" aria-label="Phone icon" />
            </div>
            <Typography variant="h2">Phone</Typography>
            <Typography variant="body">07732 107825</Typography>
          </Grid>
          <Grid size={10} className="contact-us-item-container">
            <div className="facebook-container">
              <FacebookIcon
                className="facebook-icon"
                aria-label="Facebook icon"
              />
            </div>
            <Typography variant="h2">Facebook</Typography>
            <Link
              href="https://www.facebook.com/JEPropertyservice/?locale=en_GB"
              variant="body"
            >
              follow us
            </Link>
          </Grid>
          <Grid size={10} className="contact-us-item-container">
            <div className="location-on-container">
              <LocationOnIcon
                className="location-on-icon"
                aria-label="Location icon"
              />
            </div>
            <Typography variant="h2">Location</Typography>
            <Typography variant="body" className="address">
              24 Woodstock Road, Manchester, United Kingdom
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
