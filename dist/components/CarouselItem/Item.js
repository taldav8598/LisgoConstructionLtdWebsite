import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import "./Item.css";
export default function Item({
  item
}) {
  return /*#__PURE__*/React.createElement(Paper, null, /*#__PURE__*/React.createElement("div", {
    className: "reviewContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "review"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "span",
    className: "reviewBody"
  }, item.review), /*#__PURE__*/React.createElement(Typography, {
    className: "reviewName",
    variant: "span"
  }, item.name))));
}