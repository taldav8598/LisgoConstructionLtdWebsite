import { Typography, Pagination, Grid, Link } from "@mui/material";
import "./Gallery.css";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import imageTwo from "../../assets/imageTwo.jpg";
import imageSeven from "../../assets/imageSeven.jpg";
export default function Gallery() {
  const [page, setPage] = useState(1);
  const imageLinks = {
    1: [imageTwo, imageSeven],
    2: ["https://i.natgeofe.com/n/da0bcdca-34f9-40d9-bda8-86709c75fdf2/MM10127_231214_10486_2x3.jpg?w=718&h=1077", "https://i.natgeofe.com/n/da0bcdca-34f9-40d9-bda8-86709c75fdf2/MM10127_231214_10486_2x3.jpg?w=718&h=1077"],
    3: [imageTwo, imageSeven]
  };
  const handleChange = (event, value) => {
    setPage(value);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "gallery",
    className: "gallery-section",
    "aria-label": "Gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery-container"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h1"
  }, "Gallery"), /*#__PURE__*/React.createElement(Grid, {
    className: "images-container",
    container: true,
    sx: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    size: "stretch"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h2"
  }, "Before"), /*#__PURE__*/React.createElement("img", {
    className: "before-image",
    src: imageLinks[page][0],
    alt: "",
    "aria-label": "Before"
  })), /*#__PURE__*/React.createElement(Grid, {
    size: "stretch"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h2"
  }, "After"), /*#__PURE__*/React.createElement("img", {
    className: "after-image",
    src: imageLinks[page][1],
    alt: "",
    "aria-label": "After"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    onChange: handleChange,
    count: 3,
    size: "large",
    "aria-label": "Pagination for gallery images"
  })), /*#__PURE__*/React.createElement("div", {
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
  }, "Enquire now")))));
}