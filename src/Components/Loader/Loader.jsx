import React, { useState, useEffect } from 'react';

const Loader = () => {
  const text = 'Astralium...'; // Texte de l'en-tête h1
  const colors = ['#BA55D3', '#FF00FF', '#9370DB']; // Couleurs pour chaque lettre
  const letters = text.split(''); // Divisez le texte en lettres individuelles

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % letters.length);
    }, 150); // Changez la vitesse ici

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="preloader">
      <div id="loader"></div>
      <h1>
        {letters.map((letter, index) => (
          <span
            key={index}
            className="letter"
            style={{
              color:
                index === currentLetterIndex
                  ? colors[index % colors.length]
                  : 'white',
              transform:
                index === currentLetterIndex ? 'scale(1.5)' : 'scale(1)',
              transition: 'color 0.3s, transform 0.3s',
            }} // Change la couleur et la taille en fonction de l'index
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;
