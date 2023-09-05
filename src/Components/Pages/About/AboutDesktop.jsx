import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../../TranslateService';

const AboutDesktop = ({ language }) => {
  return (
    <>
      <div className="AboutDesktop">
        <p>{translate('cryptoExtension', language)}</p>
      </div>
    </>
  );
};

AboutDesktop.propTypes = {
  language: PropTypes.string.isRequired,
};

export default AboutDesktop;
