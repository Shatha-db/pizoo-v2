export const locales = ['en', 'ar', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'tr', 'zh', 'jp'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  ru: 'Русский',
  tr: 'Türkçe',
  zh: '中文',
  jp: '日本語',
};
