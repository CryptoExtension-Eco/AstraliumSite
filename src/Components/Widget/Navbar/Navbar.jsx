import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Assurez-vous que vous importez PropTypes

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = ({ language, onLanguageChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      {isMobile ? (
        <NavbarMobile language={language} onLanguageChange={onLanguageChange} />
      ) : (
        <NavbarDesktop />
      )}
    </div>
  );
};

Navbar.propTypes = {
  // Ajoutez cette section pour valider les props
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default Navbar;
