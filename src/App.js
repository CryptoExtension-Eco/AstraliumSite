import React, { useState, useEffect } from 'react';
import './Scss/App.scss';
import PreLoader from './Components/Loader/Loader'; // Importez le composant PreLoader ici
import { Home } from './Components';
import { Contact } from './Components/Pages';
import { About } from './Components';
import { Footer, Navbar } from './Components/Widget';

function App() {
  const [language, setLanguage] = useState('fr');
  const [contentLoaded, setContentLoaded] = useState(false); // État pour suivre le chargement du contenu

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 3000);
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      {contentLoaded ? (
        <>
          <Navbar language={language} onLanguageChange={handleLanguageChange} />
          <Home language={language} onLanguageChange={handleLanguageChange} />
          <About language={language} />
          <Contact language={language} />
          <Footer />
        </>
      ) : (
        <PreLoader /> // Afficher le préchargeur pendant le chargement
      )}
    </>
  );
}

export default App;
