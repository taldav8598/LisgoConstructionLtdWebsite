import { Typography, Grid, Link } from "@mui/material";
import "./AboutUs.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
export default function AboutUs() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about-us",
    className: "about-us-section",
    "aria-label": "About us"
  }, /*#__PURE__*/React.createElement(Typography, {
    className: "header",
    variant: "h1"
  }, "About us"), /*#__PURE__*/React.createElement("div", {
    className: "about-container"
  }, /*#__PURE__*/React.createElement(Grid, {
    className: "first-journey-part",
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    className: "inner-journey-part-one",
    item: true,
    xs: 6,
    sx: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "info"
  }, "Welcome to Lisgo, where craftmanship meets dedication and excellence.")), /*#__PURE__*/React.createElement(Grid, {
    className: "empty-grid-item",
    item: true,
    xs: 6
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Grid, {
    className: "first-journey-part",
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    className: "empty-grid-item",
    item: true,
    xs: 4
  }, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement(Grid, {
    className: "inner-journey-part-two",
    item: true,
    xs: 8,
    sx: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "info"
  }, "We are not just builders; we are creators of spaces that inspire, innovate, and endure."))), /*#__PURE__*/React.createElement("p", {
    className: "last-journey-part"
  }, "With 4 years in the industry, we have honed our expertise to deliver exceptional construction solutions tailored to meet your unique needs.")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "mention-container"
  }, /*#__PURE__*/React.createElement(Typography, {
    className: "header",
    variant: "h2"
  }, "Testimonials"), /*#__PURE__*/React.createElement("div", {
    className: "mention"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project. Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project.")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project. Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project.")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project. Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project.")))), /*#__PURE__*/React.createElement("div", {
    onClick: () => document.getElementById("enquire").scrollIntoView(),
    className: "cheveron-container",
    "aria-label": "Enquire now cheveron"
  }, /*#__PURE__*/React.createElement(ExpandLessIcon, {
    className: "cheveron",
    color: "white"
  }), /*#__PURE__*/React.createElement(Typography, {
    href: "#enquire",
    className: "enquire-now-link",
    variant: "h2"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "#enquire"
  }, "Enquire now"))));
}