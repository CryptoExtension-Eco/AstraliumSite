import React, { useState } from 'react';
import './Scss/App.scss';
import { Home } from './Components';
import { About, Contact } from './Components/Pages';
import { Footer, Navbar } from './Components/Widget';

function App() {
  const [language, setLanguage] = useState('fr'); // Définissez la langue par défaut
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <Home language={language} onLanguageChange={handleLanguageChange} />
      <About language={language} />
      <Contact language={language} />
      <Footer />
    </>
  );
}

export default App;
