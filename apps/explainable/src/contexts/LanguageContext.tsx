import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, translations } from '../lib/translations';

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const getInitialLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    let stored: Locale | null = null;
    try { stored = localStorage.getItem('explainable-showcase-locale') as Locale; } catch { /* The showcase still works without browser storage. */ }
    if (stored && ['en', 'vi', 'es', 'fr', 'zh-CN', 'ja'].includes(stored)) {
      return stored;
    }
    const browserLang = navigator.language?.split('-')[0];
    const fullBrowserLang = navigator.language;
    if (fullBrowserLang === 'zh-CN' || fullBrowserLang === 'zh-TW' || fullBrowserLang === 'zh-HK') {
      return 'zh-CN';
    }
    if (browserLang && ['en', 'vi', 'es', 'fr', 'zh', 'ja'].includes(browserLang)) {
      if (browserLang === 'zh') return 'zh-CN';
      return browserLang as Locale;
    }
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try { localStorage.setItem('explainable-showcase-locale', newLocale); } catch { /* Keep language selection in memory. */ }
  };

  const t = { ...translations['en'], ...(translations[locale] || {}) } as typeof translations['en'];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
