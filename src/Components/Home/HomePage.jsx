import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HomePagesMobile from './HomePagesMobile';
import HomePagesDesktop from './HomePagesDesktop';
const HomePages = ({ language, onLanguageChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home">
      {isMobile ? (
        <HomePagesMobile
          language={language}
          onLanguageChange={onLanguageChange}
        />
      ) : (
        <HomePagesDesktop />
      )}
    </div>
  );
};
HomePages.propTypes = {
  // Ajouter cette section pour valider les props
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};
export default HomePages;
