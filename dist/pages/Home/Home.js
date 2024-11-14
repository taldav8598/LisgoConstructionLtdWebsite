import Carousel from "react-material-ui-carousel";
import { Link, Typography, Grid } from "@mui/material";
import "./Home.css";
import Item from "../../components/CarouselItem/Item";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Home() {
  const reviews = [{
    name: "John",
    review: "Exceptional craftsmanship and attention to detail! From concept to completion, this construction company delivered beyond expectations. Highly recommended for any project."
  }, {
    name: "Sally",
    review: "Professionalism at its finest! Timely and efficient, this construction company tackled our renovation project with expertise and finesse. Delighted with the results!"
  }, {
    name: "Ian",
    review: "Outstanding communication and transparency throughout the build process. This construction company's dedication to client satisfaction is commendable. Will definitely hire again."
  }, {
    name: "Katie",
    review: "Reliable and trustworthy, this construction company exceeded all our expectations. Their commitment to quality workmanship and customer service sets them apart in the industry. A top choice for any construction needs."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "HomeSection",
    "aria-label": "Home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ReviewContainer"
  }, /*#__PURE__*/React.createElement(Carousel, {
    className: "Carousel",
    activeIndicatorIconButtonProps: {
      style: {
        color: "#ffd70d"
      }
    },
    indicatorIconButtonProps: {
      style: {
        scale: "1.25",
        margin: "0 0.5rem"
      }
    },
    interval: 7500,
    "aria-label": "Review carousel"
  }, reviews.map((item, i) => /*#__PURE__*/React.createElement(Item, {
    className: "item",
    key: i,
    item: item
  }))), /*#__PURE__*/React.createElement(Link, {
    className: "see-more-reviews-link",
    target: "_blank",
    href: "https://www.google.com/search?q=lisgo+construction+ltd&rlz=1C5GCCM_en&oq=lisgo+co&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAuGK8BGMcBGIAEMgYIAhBFGDkyCAgDEAAYFhgeqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0xa51f849c094cefd3:0xc770e71668c7846d,1,,,,"
  }, "See more reviews")), /*#__PURE__*/React.createElement("div", {
    className: "home-title-container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "leading-company-heading"
  }, "Leading Construction Company"), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "0 1rem"
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    size: "grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "LisgoHeadingContainer"
  }, /*#__PURE__*/React.createElement(Typography, {
    className: "lisgo-heading",
    variant: "h2"
  }, "Lisgo Construction Ltd."), /*#__PURE__*/React.createElement(Typography, {
    className: "about-us-heading",
    variant: "h3"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "#about-us",
    className: "about-us-link"
  }, "About us")), /*#__PURE__*/React.createElement(Typography, {
    className: "enquire-now-heading",
    variant: "h3"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "#enquire"
  }, "Enquire now")))), /*#__PURE__*/React.createElement(Grid, {
    size: "grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "LisgoHomeLogoContainer"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "LisgoHomeLogo",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1000",
    height: "1000",
    fill: "none",
    viewBox: "0 0 1000 1000",
    "aria-label": "Lisgo Construction Ltd. Logo"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "a",
    width: "1000",
    height: "1000",
    x: "0",
    y: "0",
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "alpha"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "500",
    cy: "500",
    r: "500",
    fill: "#181818"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#a)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "500",
    cy: "500",
    r: "500",
    fill: "#181818"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFD70D",
    d: "M693.696-173.017c2.291-3.718 7.661-3.821 10.092-.193l320.752 478.578c2.64 3.943-.13 9.248-4.87 9.339l-622.949 11.924c-4.746.091-7.713-5.105-5.224-9.146zM556.781-33.11c4.348.41 6.815 5.182 4.636 8.967L274.004 475.166c-2.368 4.114-8.349 3.979-10.529-.238L-22.683-78.532c-2.18-4.216 1.167-9.175 5.893-8.728zM43.392 165.624c2.541-3.553 7.905-3.286 10.082.5l287.121 499.477c2.365 4.116-.759 9.218-5.5 8.983l-622.294-30.89c-4.741-.235-7.344-5.622-4.582-9.483zM3.731 701.856c-1.732-4.01 1.263-8.468 5.63-8.379l576.002 11.682c4.746.096 7.506 5.405 4.859 9.345l-347.47 517.176c-2.647 3.94-8.605 3.39-10.488-.97zm411.925 360.224c-4.336-.53-6.672-5.37-4.39-9.09l300.886-491.307c2.48-4.048 8.455-3.751 10.52.524L993.67 1123.24c2.065 4.28-1.417 9.14-6.129 8.57zm236.78-699.139c-1.982-3.892.725-8.53 5.089-8.718l575.595-24.703c4.74-.203 7.83 4.92 5.44 9.02L924.426 876.617c-2.393 4.099-8.374 3.928-10.528-.302z"
  })))))), /*#__PURE__*/React.createElement("div", {
    onClick: () => document.getElementById("enquire").scrollIntoView(),
    className: "cheveron-container"
  }, /*#__PURE__*/React.createElement(Typography, {
    href: "#enquire",
    className: "enquire-now-link",
    variant: "h4"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "#enquire"
  }, "Enquire now")), /*#__PURE__*/React.createElement(ExpandMoreIcon, {
    className: "cheveron",
    color: "white",
    fontSize: "small",
    "aria-label": "Enquire now cheveron"
  }))));
}