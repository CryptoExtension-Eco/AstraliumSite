import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { translate } from '../../TranslateService';

const NavbarMobile = ({ language, onLanguageChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const navigationItems = [
    { icon: faHome, key: 'home' },
    { icon: faUser, key: 'about' },
    { icon: faEnvelope, key: 'contact' },
    { icon: faGoogle, key: 'cryptoExtension' },
  ];

  return (
    <div className="navbar-container">
      <h1 className="logo">Astralium</h1>
      <div className="lang">
        <button className="lang-button" onClick={() => onLanguageChange('fr')}>
          FR
        </button>
        <span className="lang-divider">|</span>
        <button className="lang-button" onClick={() => onLanguageChange('en')}>
          EN
        </button>
      </div>
      <div className="navigation">
        <ul>
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className={`list ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleItemClick(index)}
            >
              <a
                href={
                  item.key === 'cryptoExtension'
                    ? 'https://cryptoextension.fr/'
                    : '#'
                }
                target={item.key === 'cryptoExtension' ? '_blank' : ''}
                rel={
                  item.key === 'cryptoExtension' ? 'noopener noreferrer' : ''
                }
              >
                <span className="icon">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="text">{translate(item.key, language)}</span>
              </a>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

NavbarMobile.propTypes = {
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default NavbarMobile;
