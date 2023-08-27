import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../TranslateService'; // Importer la fonction translate

const TechnologyCard = ({ title, items, language }) => {
  return (
    <div className="card">
      <div className="title">
        {/* Utiliser translate(title, language) pour traduire le titre */}
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

const About = ({ language }) => {
  const technologies = [
    {
      title: 'CryptoExtension',
      items: ['first', 'second', 'tird'], // Utiliser les clés de traduction
    },
    {
      title: 'Ethereum',
      items: ['first', 'second', 'tird'], // Utiliser les clés de traduction
    },
    {
      title: 'Solidity',
      items: ['first', 'second', 'tird'], // Utiliser les clés de traduction
    },
  ];

  return (
    <div className="About">
      {technologies.map((technology, index) => (
        <TechnologyCard key={index} title={technology.title} items={technology.items.map(item => translate(item, language))} language={language} />
      ))}
    </div>
  );
};

About.propTypes = {
  language: PropTypes.string.isRequired,
};

export default About;
