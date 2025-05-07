import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from 'i18next';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [language, setLanguageState] = useState<Language>(
      (localStorage.getItem('language') as Language) || 'en'
    );
    const [direction, setDirection] = useState<'rtl' | 'ltr'>(
      localStorage.getItem('direction') as 'rtl' | 'ltr' || 'ltr'
    );

    useEffect(() => {
        // Set initial direction based on language
        const newDirection = language === 'fa' ? 'rtl' : 'ltr';
        setDirection(newDirection);
        document.documentElement.dir = newDirection;
        localStorage.setItem('direction', newDirection);
    }, []);

    const setLanguage = (lang: Language) => {
        i18n.changeLanguage(lang);
        setLanguageState(lang);
        // Update direction when language changes
        const newDirection = lang === 'fa' ? 'rtl' : 'ltr';
        setDirection(newDirection);
        document.documentElement.dir = newDirection;
    };

    return (
        <LanguageContext.Provider value={{language, setLanguage, direction}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguageContext must be used inside LanguageProvider');
    return context;
};