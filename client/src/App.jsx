import { Container } from '@mui/material';

import Navigation from './Navigation';
import Home from  './Home';
import EnquireNow from  './EnquireNow';


import './App.css';
function App() {

  return (
    <Container className='app-container' maxWidth="lg">
     <Navigation/>
     <Home/>
     <br/>
     <EnquireNow/>
    </Container>
  );
}

export default App;
