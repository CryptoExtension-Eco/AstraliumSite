import React from 'react';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NavbarMobile = () => {
  return (
    <>
      <nav className='navigations'>
        <ul className='navigation__list'>
          <li><a href='#'><FontAwesomeIcon icon={faHome} size='2x' className='navigation__logoFontAwesome'/></a></li>
          <li><a href='#'><FontAwesomeIcon icon={faEnvelope} size='2x' className='navigation__logoFontAwesome'/></a></li>
          <li><a href='#'>3</a></li>
          <li><a href='#'>4</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMobile;
