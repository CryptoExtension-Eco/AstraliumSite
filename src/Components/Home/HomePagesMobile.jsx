import React from 'react';
import '../../Scss/Pages/HomePages.scss';
import PropTypes from 'prop-types';

// import CryptoAstra from './img/CryptoXAstra.png';
import TextImg from '../img/TextImg3.png';
import { translate } from '../TranslateService';

const HomePagesMobile = ({ language }) => {
  return (
    <>
      <div className="home">
        <div className="right">
          <p>{translate('pageTitle', language)}</p>
        </div>
        <div className="left">
          {/* <img src={CryptoAstra} alt="" /> */}
          <img src={TextImg} alt="" />
        </div>
      </div>
    </>
  );
};

HomePagesMobile.propTypes = {
  language: PropTypes.string.isRequired,
};

export default HomePagesMobile;
