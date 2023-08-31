import React, { useState, useEffect } from 'react';
import './Scss/App.scss';
import PreLoader from './Components/Loader/Loader'; // Importez le composant PreLoader ici
import { Home } from './Components';
import { About, Contact } from './Components/Pages';
import { Footer, Navbar } from './Components/Widget';

function App() {
  const [language, setLanguage] = useState('fr');
  const [contentLoaded, setContentLoaded] = useState(false); // État pour suivre le chargement du contenu

  useEffect(() => {
    // Ici, vous pouvez simuler un délai de chargement ou vérifier le chargement de données, etc.
    // Une fois le chargement terminé, mettez setContentLoaded(true);
    setTimeout(() => {
      setContentLoaded(true); // Par exemple, marquez le contenu comme chargé après 2 secondes
    }, 2000);
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      {contentLoaded ? ( // Afficher le contenu seulement lorsque le chargement est terminé
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
