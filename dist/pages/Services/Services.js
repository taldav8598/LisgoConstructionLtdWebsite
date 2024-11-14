import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Link } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./Services.css";
export default function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "services-section",
    "aria-label": "Services"
  }, /*#__PURE__*/React.createElement(Container, {
    className: "services-container"
  }, /*#__PURE__*/React.createElement(Typography, {
    className: "header",
    variant: "h1"
  }, "Services"), /*#__PURE__*/React.createElement(Accordion, {
    className: "accordion",
    "aria-label": "Doors information summary"
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel1-content",
    id: "panel1-header",
    className: "dropdown"
  }, "Doors"), /*#__PURE__*/React.createElement(AccordionDetails, null, "We offer a range a door options and styles that you choose from.", " ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://www.howdens.com/joinery/doors"
  }, "See Howdens website"), " ", "for ideas on the styles, sizes and type of door you want. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("a", {
    href: "#enquire"
  }, "Enquire now"))), /*#__PURE__*/React.createElement(Accordion, {
    className: "accordion",
    "aria-label": "Flooring information summary"
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel2-content",
    id: "panel2-header",
    className: "dropdown"
  }, "Flooring"), /*#__PURE__*/React.createElement(AccordionDetails, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")), /*#__PURE__*/React.createElement(Accordion, {
    className: "accordion",
    "aria-label": "Bannisters information summary"
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel3-content",
    id: "panel3-header",
    className: "dropdown"
  }, "Banisters"), /*#__PURE__*/React.createElement(AccordionDetails, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")), /*#__PURE__*/React.createElement(Accordion, {
    className: "accordion",
    "aria-label": "Other services information summary"
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel4-content",
    id: "panel4-header",
    className: "dropdown"
  }, "Other"), /*#__PURE__*/React.createElement(AccordionDetails, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))), /*#__PURE__*/React.createElement("div", {
    onClick: () => document.getElementById("enquire").scrollIntoView(),
    className: "cheveron-container"
  }, /*#__PURE__*/React.createElement(ExpandLessIcon, {
    className: "cheveron",
    color: "white",
    "aria-label": "Enquire now cheveron"
  }), /*#__PURE__*/React.createElement(Typography, {
    href: "#enquire",
    className: "enquire-now-link",
    variant: "h2"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "#enquire"
  }, "Enquire now"))));
}