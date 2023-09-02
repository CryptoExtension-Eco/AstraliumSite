import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../../TranslateService'; // Assurez-vous d'importer correctement le service de traduction

const NavbarDesktop = ({ language, onLanguageChange }) => {
  return (
    <div className="navbar-container">
      <nav className="header">
        <a href="#" className="header__logo">
          {translate('home', language)}{' '}
          {/* Utilisez translate pour le texte du logo */}
        </a>
        <ul className="header__navigation">
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              {translate('home', language)}{' '}
              {/* Utilisez translate pour le texte du lien "home" */}
            </a>
          </li>
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              {translate('about', language)}{' '}
              {/* Utilisez translate pour le texte du lien "about" */}
            </a>
          </li>
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              {translate('contact', language)}{' '}
              {/* Utilisez translate pour le texte du lien "contact" */}
            </a>
          </li>
        </ul>
      </nav>
      <div className="lang">
        <button className="lang-button" onClick={() => onLanguageChange('fr')}>
          FR
        </button>
        <span className="lang-divider">|</span>
        <button className="lang-button" onClick={() => onLanguageChange('en')}>
          EN
        </button>
      </div>
    </div>
  );
};

NavbarDesktop.propTypes = {
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default NavbarDesktop;
