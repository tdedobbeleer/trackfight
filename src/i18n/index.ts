import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import nl from './locales/nl.json'

export const localeStorageKey = 'trackfight-locale'

const supportedLocales = ['en', 'nl'] as const
type SupportedLocale = (typeof supportedLocales)[number]

const getStoredLocale = (): SupportedLocale => {
  if (typeof window === 'undefined') {
    return 'nl'
  }

  try {
    const storedLocale = window.localStorage.getItem(localeStorageKey)
    return storedLocale === 'en' || storedLocale === 'nl' ? storedLocale : 'nl'
  } catch {
    return 'nl'
  }
}

export const setLocalePreference = (loc: string) => {
  if (typeof window === 'undefined' || (loc !== 'en' && loc !== 'nl')) {
    return
  }

  try {
    window.localStorage.setItem(localeStorageKey, loc)
  } catch {
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: getStoredLocale(),
  fallbackLocale: 'nl',
  messages: {
    en,
    nl,
  },
})