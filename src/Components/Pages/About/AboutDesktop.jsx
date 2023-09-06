import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../../TranslateService';
const TechnologyCard = ({ title, items, language }) => {
  return (
    <div className="card">
      <div className="title">
        <p>{translate(title, language)}</p>
      </div>
      <div className="list">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TechnologyCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  language: PropTypes.string.isRequired,
};

const AboutDesktop = ({ language }) => {
  const technologies = [
    {
      title: 'CryptoExtension',
      items: ['first', 'second', 'third'],
    },
    {
      title: 'Ethereum',
      items: ['first', 'second', 'third'],
    },
    {
      title: 'Solidity',
      items: ['first', 'second', 'third'],
    },
  ];

  return (
    <div className="AboutDesktop">
      {technologies.map((technology, index) => (
        <TechnologyCard
          key={index}
          title={technology.title}
          items={technology.items.map((item) => translate(item, language))}
          language={language}
        />
      ))}
    </div>
  );
};

AboutDesktop.propTypes = {
  language: PropTypes.string.isRequired,
};

export default AboutDesktop;
