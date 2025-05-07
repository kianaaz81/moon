
import React, { createContext, useContext, useState } from "react";

type ThemeMode = 'light' | 'dark'; 

interface ThemeContextType {
    mode: ThemeMode;
    toggleMode: () => void;
    setMode: (mode: ThemeMode) => void;
  }

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProviderCustom: React.FC <{ children: React.ReactNode }> =({children})=>{
    const [mode , setMode]=useState<ThemeMode>('light');

    const toggleMode = () => setMode (prev => (prev === 'light' ? 'dark' : 'light'));

    return(
        <ThemeContext.Provider value={{mode , toggleMode ,setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeContext must be used inside ThemeProviderCustom');
  return context;
};