import { Container } from "@mui/material";

import Navigation from "./Navigation";
import Home from "./pages/Home/Home";
import EnquireNow from "./pages/EnquireNow/EnquireNow";
import Footer from "./Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import TemporaryMobileDrawer from "./components/TemporaryMobileDrawer";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Navigation toggleDrawer={toggleDrawer} open={open} width={width} />
      <Container className="app-container" maxWidth="lg">
        <Home />
        <EnquireNow />
        <Services />
        <AboutUs />
        <Gallery />
        <ContactUs />
      </Container>
      <TemporaryMobileDrawer open={open} toggleDrawer={toggleDrawer} />
      {width > 769 ? <Footer /> : null}
    </>
  );
}

export default App;
