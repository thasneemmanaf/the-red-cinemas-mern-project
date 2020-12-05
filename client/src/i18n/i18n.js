import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

const availableLanguages = ['sv', 'en', 'ml'];

i18n
  .use(Backend) // load translation using xhr
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    lng: 'sv',
    fallbackLng: 'sv',
    debug: false,
    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
