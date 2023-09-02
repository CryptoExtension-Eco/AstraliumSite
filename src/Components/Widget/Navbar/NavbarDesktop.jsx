import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../../TranslateService';

const NavbarDesktop = ({ language, onLanguageChange }) => {
  return (
    <div className="navbar-container">
      <nav className="header">
        <a href="#" className="header__logo">
          {translate('home', language)}{' '}
        </a>
        <ul className="header__navigation">
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              {translate('home', language)}{' '}
            </a>
          </li>
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              {translate('about', language)}{' '}
            </a>
          </li>
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              {translate('contact', language)}{' '}
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
