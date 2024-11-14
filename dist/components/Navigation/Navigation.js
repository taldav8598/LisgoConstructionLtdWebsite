import { Button, Container, Link, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navigation.css";
export default function Navigation({
  width,
  toggleDrawer,
  open
}) {
  return /*#__PURE__*/React.createElement(Container, {
    className: "navigation-container",
    "aria-label": "Navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "LisgoLogoContainer"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "LisgoLogo",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1000",
    height: "1000",
    fill: "none",
    viewBox: "0 0 1000 1000",
    "aria-label": "Lisgo Construction Ltd. logo"
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
  }))), /*#__PURE__*/React.createElement(Typography, {
    className: "Lisgo-Logo-Heading",
    variant: "h6"
  }, "Lisgo Construction Ltd.")), width > 768 && !open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    href: "#home",
    className: "navigation-link",
    underline: "hover",
    variant: "h6"
  }, "Home"), /*#__PURE__*/React.createElement(Link, {
    href: "#about-us",
    className: "navigation-link",
    underline: "hover",
    variant: "h6"
  }, "About us"), /*#__PURE__*/React.createElement(Link, {
    href: "#enquire",
    className: "navigation-link",
    underline: "hover",
    variant: "h6"
  }, "Enquire now"), /*#__PURE__*/React.createElement(Link, {
    href: "#services",
    className: "navigation-link",
    underline: "hover",
    variant: "h6"
  }, "Services"), /*#__PURE__*/React.createElement(Link, {
    href: "#gallery",
    className: "navigation-link",
    underline: "hover",
    variant: "h6"
  }, "Gallery"), /*#__PURE__*/React.createElement(Link, {
    href: "#contact-us",
    className: "navigation-link",
    underline: "hover",
    variant: "h6"
  }, "Contact us")) : /*#__PURE__*/React.createElement(Button, {
    onClick: toggleDrawer(true),
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement(MenuIcon, {
    className: "menu-icon",
    "aria-label": "Menu"
  })));
}