import React from 'react';
import './Scss/App.scss';
import { Home } from './Components';
import { About, Contact } from './Components/Pages';
import { Footer, Navbar } from './Components/Widget';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
