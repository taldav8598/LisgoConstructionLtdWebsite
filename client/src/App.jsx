import { Container } from '@mui/material';

import Navigation from './Navigation';
import Home from  './Home';
import EnquireNow from  './EnquireNow';
import Footer from './Footer'
import './App.css';
function App() {

  return (
    <>
       <Navigation/>
    <Container className='app-container' maxWidth="lg">
   
      <Home id="home"/>
      <EnquireNow id="enquire"/>
    </Container>
    <Footer />
    </>
  );
}

export default App;
