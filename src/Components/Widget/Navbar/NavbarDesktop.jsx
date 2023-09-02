import React from 'react';

const NavbarDesktop = () => {
  return (
    <div>
      <nav className="header">
        <a href="#" className="header__logo">
          Astralium
        </a>
        <ul className="header__navigation">
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              home
            </a>
          </li>
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              about
            </a>
          </li>
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
