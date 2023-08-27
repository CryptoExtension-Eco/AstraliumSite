import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const NavbarMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const navigationItems = [
    { icon: faHome, text: 'Home' },
    { icon: faUser, text: 'About' },
    { icon: faEnvelope, text: 'Contact' },
    { icon: faGoogle, text: 'CryptoExtension' },
  ];

  return (
    <div className="navbar-container">
      <h1 className="logo">Astralium</h1>
      <div className="lang">
        <button className="lang-button">FR</button>
        <span className="lang-divider">|</span>
        <button className="lang-button">EN</button>
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
                  item.text === 'CryptoExtension'
                    ? 'https://cryptoextension.fr/'
                    : '#'
                }
                target={item.text === 'CryptoExtension' ? '_blank' : ''}
                rel={
                  item.text === 'CryptoExtension' ? 'noopener noreferrer' : ''
                }
              >
                <span className="icon">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="text">{item.text}</span>
              </a>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
