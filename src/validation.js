import * as yup from 'yup';
import i18next from './i18n.js';

yup.setLocale({
  string: {
    url: i18next.t('errors.url'),
    required: i18next.t('errors.required'),
  },
});

export const createRssUrlSchema = (existingUrls) => {
  const normalized = new Set(existingUrls.map(u => u.trim().toLowerCase()));

  return yup
    .string()
    .trim()
    .required()
    .url()
    .test('no-duplicate', i18next.t('errors.duplicate'), (value) => {
      if (!value) return true;
      return !normalized.has(value.toLowerCase());
    });
};
