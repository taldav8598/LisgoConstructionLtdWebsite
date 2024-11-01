import { Container } from "@mui/material";

import Navigation from "./Navigation";
import Home from "./Home";
import EnquireNow from "./EnquireNow";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navigation />
      <Container className="app-container" maxWidth="lg">
        <Home />
        <EnquireNow />
        <Services />
        <div id="aboutUs">
          <AboutUs />
        </div>
        <Gallery />
        <ContactUs />
      </Container>
      {width > 769 ? <Footer /> : null}
    </>
  );
}

export default App;
