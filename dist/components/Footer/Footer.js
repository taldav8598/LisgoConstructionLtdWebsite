import { Typography, Grid } from "@mui/material";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
  return /*#__PURE__*/React.createElement("section", {
    className: "footer-container"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    size: "grow"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Lisgo Construction Ltd."), /*#__PURE__*/React.createElement("p", {
    className: "info"
  }, "Leading contruction company with 4 years in industry."), /*#__PURE__*/React.createElement("div", {
    className: "social-media-content"
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    size: "grow"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Social media"), /*#__PURE__*/React.createElement("div", {
    className: "social-media-content"
  }, /*#__PURE__*/React.createElement(InstagramIcon, {
    "aria-label": "Instagram icon"
  }), /*#__PURE__*/React.createElement("p", null, "Instagram")), /*#__PURE__*/React.createElement("div", {
    className: "social-media-content"
  }, /*#__PURE__*/React.createElement(FacebookIcon, {
    "aria-label": "Facebook icon"
  }), /*#__PURE__*/React.createElement("p", null, "Facebook"))), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    size: "grow"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Useful links"), /*#__PURE__*/React.createElement("p", {
    className: "info"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "example.com")), /*#__PURE__*/React.createElement("p", {
    className: "info"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "example.com"))), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    size: "grow"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Contact information"), /*#__PURE__*/React.createElement("p", {
    className: "info"
  }, "Manchester, WA, Lancashire/Cheshire"), /*#__PURE__*/React.createElement("p", {
    className: "info"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:"
  }, "Phone number")), /*#__PURE__*/React.createElement("p", {
    className: "info"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:lisgoconstruction@gmail.com?subject=Enquiry"
  }, "lisgocontruction@gmail.com")))));
}