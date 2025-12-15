import i18next from 'i18next';

const resources = {
  en: {
    translation: await fetch('/locales/en/translation.json').then(res =>
      res.json(),
    ),
  },
  ru: {
    translation: await fetch('/locales/ru/translation.json').then(res =>
      res.json(),
    ),
  },
};

i18next.init({
  lng: 'ru',
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
