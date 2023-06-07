import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Video, Menu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Video />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
