import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../TranslateService';

import '../../Scss/Pages/Home/HomeDesktop.scss';
import Logo from '../img/TextImg2.png';


const HomePagesDesktop = ({ language }) => {
  return (
    <>
      <div className="HomeDesktop">
        <div className="content">
          <a
            href="https://chrome.google.com/webstore/detail/cryptoextension/fobclgcmkebeadojpnjgkphdgmagfbee?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="littleB">L&#39;extension </span>
          </a>
          <p className='textDesktop'>{translate('pageTitle', language)}</p>

          <a
            className="a"
            href="https://cryptoextension.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translate('cryptoExtension', language)}
          </a>
          <a
            className="a"
            href="https://cryptoextension.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translate('titleContact', language)}
          </a>
        </div>
        <div className="img">
          <img src={Logo} alt="" />
        </div>
      </div>
    </>
  );
};

HomePagesDesktop.propTypes = {
  language: PropTypes.string.isRequired,
};

export default HomePagesDesktop;
