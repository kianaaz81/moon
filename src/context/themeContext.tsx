import React, { createContext, useContext, useState } from "react";

type ThemeMode = 'light' | 'dark'; 

interface ThemeContextType {
    mode: ThemeMode;
    toggleMode: () => void;
    setMode: (mode: ThemeMode) => void;
    colors: {
        background: string;
        text: string;
        shadow: string;
        bgColorMain: string;
        colorMain: string;  
        shadowMain: string;
        bgColorForecast: string;
        shadowForecast: string;
        bgColorChart:string;
    };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProviderCustom: React.FC <{ children: React.ReactNode }> =({children})=>{
    const [mode , setMode]=useState<ThemeMode>('light');

    const toggleMode = () => setMode (prev => (prev === 'light' ? 'dark' : 'light'));

    const colors = {
        background: mode === 'dark' ? '#292f45' : '#fff',
        text: mode === 'dark' ? '#f3f4f7' : '#003464',
        shadow: mode === 'dark' ? '0px 0px 10px 0px rgb(110, 110, 110)' : '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
        bgColorMain:  mode === 'dark' ? '#292f44' : '#e1e9ee',
        colorMain: mode === 'dark' ? '#f3f4f7' : '#003464' ,
        shadowMain:  mode === 'dark' ? '0 2px 12px 0 rgba(31, 38, 135, 0.10)' : '0 2px 12px 0 rgba(31, 38, 135, 0.30)',
        bgColorForecast: mode == 'dark' ? '#3F4861' : '#CDD9EF',
        shadowForecast:  mode === 'dark' ? '0px 8px 8px 1.5px rgb(172, 172, 172)' : '0px 8px 8px 1.5px rgba(39, 38, 38, 0.25)',
        bgColorChart:  mode === 'dark' ? 'rgb(131, 131, 131)' : 'rgba(31, 38, 135, 0.30)',
    };

    return(
        <ThemeContext.Provider value={{mode, toggleMode, setMode, colors}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeContext must be used inside ThemeProviderCustom');
  return context;
};