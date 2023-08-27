import frTranslation from './json/fr.json';
import enTranslation from './json/en.json';

export function translate(key, language) {
  const translations = {
    fr: frTranslation,
    en: enTranslation,
  };

  const translationForKey = translations[language][key];

  if (typeof translationForKey === 'string') {
    return translationForKey;
  } else {
    console.warn(`Translation not available for key: ${key}`);
    return key;
  }
}
