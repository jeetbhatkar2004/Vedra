import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    pricing: 'Pricing',
    contact: 'Contact',
    dashboard: 'Dashboard',
    signIn: 'Sign In',
    getStarted: 'Get Started',
    signOut: 'Sign Out',
    
    // Common
    language: 'Language',
    english: 'English',
    hindi: 'Hindi',
  },
  hi: {
    // Navigation
    home: 'होम',
    about: 'के बारे में',
    services: 'सेवाएं',
    pricing: 'मूल्य निर्धारण',
    contact: 'संपर्क',
    dashboard: 'डैशबोर्ड',
    signIn: 'साइन इन',
    getStarted: 'शुरू करें',
    signOut: 'साइन आउट',
    
    // Common
    language: 'भाषा',
    english: 'अंग्रेजी',
    hindi: 'हिंदी',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('vedra-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('vedra-language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
