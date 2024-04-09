import { Container } from '@mui/material';

import Navigation from './Navigation';
import Home from  './Home';
import EnquireNow from  './EnquireNow';
import Footer from './Footer'
import AboutUs from './AboutUs';
import Services from './Services'
import './App.css';

function App() {

  return (
    <>
       <Navigation/>
    <Container className='app-container' maxWidth="lg">
      <Home/>
      <div id="aboutUs">
      <AboutUs />
      </div>
      <EnquireNow/>
      <Services />
    </Container>
    <Footer />
    </>
  );
}

export default App;
