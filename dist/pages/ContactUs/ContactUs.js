import { Grid, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./ContactUs.css";
export default function ContactUs() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact-us",
    className: "contact-us-section",
    "aria-label": "Contact us"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-us-container"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Contact Us"), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: "contact-us-grid"
  }, /*#__PURE__*/React.createElement(Grid, {
    size: 10,
    className: "contact-us-item-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "email-container"
  }, /*#__PURE__*/React.createElement(EmailIcon, {
    className: "email-icon",
    "aria-label": "Email icon"
  })), /*#__PURE__*/React.createElement(Typography, {
    variant: "h2"
  }, "Email"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:lisgoconstruction@gmail.com?subject=Enquiry"
  }, "lisgocontruction@gmail.com"))), /*#__PURE__*/React.createElement(Grid, {
    size: 10,
    className: "contact-us-item-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-no-container"
  }, /*#__PURE__*/React.createElement(LocalPhoneIcon, {
    className: "phone-icon",
    "aria-label": "Phone icon"
  })), /*#__PURE__*/React.createElement(Typography, {
    variant: "h2"
  }, "Phone"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:"
  }, "Phone number"))), /*#__PURE__*/React.createElement(Grid, {
    size: 10,
    className: "contact-us-item-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "facebook-container"
  }, /*#__PURE__*/React.createElement(FacebookIcon, {
    className: "facebook-icon",
    "aria-label": "Facebook icon"
  })), /*#__PURE__*/React.createElement(Typography, {
    variant: "h2"
  }, "Facebook"), /*#__PURE__*/React.createElement(Link, {
    href: "https://www.facebook.com/JEPropertyservice/?locale=en_GB",
    variant: "body"
  }, "follow us")), /*#__PURE__*/React.createElement(Grid, {
    size: 10,
    className: "contact-us-item-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "location-on-container"
  }, /*#__PURE__*/React.createElement(LocationOnIcon, {
    className: "location-on-icon",
    "aria-label": "Location icon"
  })), /*#__PURE__*/React.createElement(Typography, {
    variant: "h2"
  }, "Location"), /*#__PURE__*/React.createElement(Typography, {
    variant: "body",
    className: "address"
  }, "24 Woodstock Road, Manchester, United Kingdom")))));
}