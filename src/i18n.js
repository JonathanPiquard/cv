import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export default
i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    fallbackLng: {
      'en-US': ['en'],
      'fr-FR': ['fr'],
      default: ['en']
    },
    debug: true,

    lng: 'en', // you can change it by hand or drop it and implement some buttons over the CV to handle language switching

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    // react i18next special options (optional)
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  })
