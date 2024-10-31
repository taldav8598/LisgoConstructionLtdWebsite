import { Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section id="contact-us" className="contact-us-section">
      <div className="contact-us-container">
        <Typography variant="h3">Contact Us</Typography>
        <div className="contact-us-grid">
          <div className="contact-item-container">
            <div className="email-container">
              <EmailIcon className="email-icon" />
            </div>
            <Typography variant="h4">Email</Typography>
            <Typography variant="body">lisgoconstruction@gmail.com</Typography>
          </div>
          <div className="contact-item-container">
            <div className="phone-no-container">
              <LocalPhoneIcon className="phone-icon" />
            </div>
            <Typography variant="h4">Phone</Typography>
            <Typography variant="body">07732 107825</Typography>
          </div>
          <div className="contact-item-container">
            <div className="facebook-container">
              <FacebookIcon className="facebook-icon" />
            </div>
            <Typography variant="h4">Facebook</Typography>
            <Link
              href="https://www.facebook.com/JEPropertyservice/?locale=en_GB"
              variant="body"
            >
              follow us
            </Link>
          </div>
          <div className="contact-item-container">
            <div className="location-on-container">
              <LocationOnIcon className="location-on-icon" />
            </div>
            <Typography variant="h4">Location</Typography>
            <Typography variant="body" class="address">
              24 woodstock road, Manchester, United Kingdom
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
