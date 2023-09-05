import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AboutMobile from './AboutMobile';
import AboutDesktop from './AboutDesktop';
const About = ({ language, onLanguageChange }) => {
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
        <AboutMobile
          language={language}
          onLanguageChange={onLanguageChange}
        />
      ) : (
        <AboutDesktop 
          language={language}
          onLanguageChange={onLanguageChange}

        />
      )}
    </div>
  );
};
About.propTypes = {
  // Ajouter cette section pour valider les props
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};
export default About;
