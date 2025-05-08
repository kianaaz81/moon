import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from 'i18next';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'rtl' | 'ltr';
  fontFamily: string;
  numberFormat: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [language, setLanguageState] = useState<Language>(
      (localStorage.getItem('language') as Language) || 'en'
    );
    const [direction, setDirection] = useState<'rtl' | 'ltr'>(
      localStorage.getItem('direction') as 'rtl' | 'ltr' || 'ltr'
    );

    const fontFamily = language === 'fa' ? "'Vazirmatn', 'sans-serif'" : "'Inter', 'system-ui', 'sans-serif'";
    const numberFormat = language === 'fa' ? 'fa-IR' : 'en-US';

    useEffect(() => {
        const newDirection = language === 'fa' ? 'rtl' : 'ltr';
        setDirection(newDirection);
        document.documentElement.dir = newDirection;
        localStorage.setItem('direction', newDirection);
        document.documentElement.style.fontFamily = fontFamily;
    }, [language]);

    const setLanguage = (lang: Language) => {
        i18n.changeLanguage(lang);
        setLanguageState(lang);
        const newDirection = lang === 'fa' ? 'rtl' : 'ltr';
        setDirection(newDirection);
        document.documentElement.dir = newDirection;
        document.documentElement.style.fontFamily = lang === 'fa' ? "'Vazirmatn', 'sans-serif'" : "'Inter', 'system-ui', 'sans-serif'";
    };

    return (
        <LanguageContext.Provider value={{
            language, 
            setLanguage, 
            direction,
            fontFamily,
            numberFormat
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguageContext must be used inside LanguageProvider');
    return context;
};