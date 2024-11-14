import { Container } from "@mui/material";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import EnquireNow from "./pages/EnquireNow/EnquireNow";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import ContactUs from "./pages/ContactUs/ContactUs";
import TemporaryMobileDrawer from "./components/TemporaryMobileDrawer";
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/LoadingSpinner/Loading";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setTimeout(() => toggleLoading(), 2500);
  }, []);
  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };
  const toggleLoading = () => {
    setLoading(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement(Loading, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navigation, {
    toggleDrawer: toggleDrawer,
    open: open,
    width: width
  }), /*#__PURE__*/React.createElement(Container, {
    className: "app-container",
    maxWidth: "lg"
  }, /*#__PURE__*/React.createElement(Home, null), /*#__PURE__*/React.createElement(EnquireNow, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(AboutUs, null), /*#__PURE__*/React.createElement(Gallery, null), /*#__PURE__*/React.createElement(ContactUs, null)), /*#__PURE__*/React.createElement(TemporaryMobileDrawer, {
    open: open,
    toggleDrawer: toggleDrawer
  }), width > 769 ? /*#__PURE__*/React.createElement(Footer, null) : null));
}
export default App;