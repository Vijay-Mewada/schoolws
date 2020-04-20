import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import Information from './components/Information';

import Event from './components/Event';
import Topper from './components/Topper';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation/>
       <Carousel/>
       <Information/>
       <Topper/>
       <Event/>
       <Footer/>
    </div>
  );
}

export default App;
