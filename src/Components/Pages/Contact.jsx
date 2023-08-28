import React from 'react';
import PropTypes from 'prop-types';

import { translate } from '../TranslateService'; // Importer la fonction translate

const Contact = ({ language }) => {
  return (
    <div className="Contact">
      <h1>{translate('titleContact', language)}</h1>
      <form action="">
        <div className="name">
          <label htmlFor="name">{translate('nameLabel', language)}</label>
          <input
            type="text"
            name="name"
            placeholder={translate('namePlaceholder', language)}
          />
        </div>
        <div className="email">
          <label htmlFor="email">{translate('emailLabel', language)}</label>
          <input
            type="email"
            name="email"
            placeholder={translate('emailPlaceholder', language)}
          />
        </div>
        <div className="message">
          <label htmlFor="message">{translate('messageLabel', language)}</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder={translate('messagePlaceholder', language)}
          ></textarea>
        </div>
        <button type="submit">{translate('submitButton', language)}</button>
      </form>
    </div>
  );
};

Contact.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Contact;
