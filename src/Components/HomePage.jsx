import React from 'react';
import '../Scss/Pages/HomePages.scss';
import PropTypes from 'prop-types';

import TextImg from './img/TextImg3.png';
import { translate } from './TranslateService';

const HomePage = ({ language }) => {

  return (
    <>
      <div className="home">
        <div className="right">
        <p>{translate('pageTitle', language)}</p>
        </div>
        <div className="left">
          <img src={TextImg} alt="" />
        </div>
      </div>
    </>
  );
};

HomePage.propTypes = {
  language: PropTypes.string.isRequired,
};

export default HomePage;
