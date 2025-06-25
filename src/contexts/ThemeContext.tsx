
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: string;
  uiStyle: string;
  accentColor: string;
  borderRadius: string;
  fontFamily: string;
  setTheme: (theme: string) => void;
  setUiStyle: (style: string) => void;
  setAccentColor: (color: string) => void;
  setBorderRadius: (radius: string) => void;
  setFontFamily: (font: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('app-theme') || 'light'
  );
  const [uiStyle, setUiStyle] = useState(() => 
    localStorage.getItem('app-ui-style') || 'modern'
  );
  const [accentColor, setAccentColor] = useState(() => 
    localStorage.getItem('app-accent-color') || 'blue'
  );
  const [borderRadius, setBorderRadius] = useState(() => 
    localStorage.getItem('app-border-radius') || 'medium'
  );
  const [fontFamily, setFontFamily] = useState(() => 
    localStorage.getItem('app-font-family') || 'inter'
  );

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    localStorage.setItem('app-ui-style', uiStyle);
    localStorage.setItem('app-accent-color', accentColor);
    localStorage.setItem('app-border-radius', borderRadius);
    localStorage.setItem('app-font-family', fontFamily);

    // Apply theme classes to document
    const root = document.documentElement;
    root.className = `theme-${theme} ui-${uiStyle} accent-${accentColor} radius-${borderRadius} font-${fontFamily}`;
  }, [theme, uiStyle, accentColor, borderRadius, fontFamily]);

  return (
    <ThemeContext.Provider value={{
      theme,
      uiStyle,
      accentColor,
      borderRadius,
      fontFamily,
      setTheme,
      setUiStyle,
      setAccentColor,
      setBorderRadius,
      setFontFamily,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
