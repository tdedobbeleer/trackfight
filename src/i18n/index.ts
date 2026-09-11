import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import nl from './locales/nl.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'nl',
  fallbackLocale: 'nl',
  messages: {
    en,
    nl,
  },
})