import React, {useState} from 'react';

const NavbarDesktop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <div>
        <nav className={`header ${isMenuOpen ? 'header--open' : ''}`}>
          <a href='#' className="header__logo">
            Astralium
          </a>
          <ul className={`header__navigation ${isMenuOpen ? 'header__navigation--open' : ''}`}>
            <li className="header__navigation-item">
            <a href='#' className="header__navigation-link">
              home
              </a>
            </li>
            <li className="header__navigation-item">
            <a href='#' className="header__navigation-link">
              about
              </a>
            </li>
            <li className="header__navigation-item">
              <a href='#' className="header__navigation-link">
              contact
              </a>
            </li>

          </ul>
          <button className={`header__burger ${isMenuOpen ? 'header__burger--open' : ''}`} onClick={handleMenuToggle}>
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavbarDesktop;
