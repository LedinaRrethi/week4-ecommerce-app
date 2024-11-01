import React, { createContext, useContext, useMemo, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { THEMES } from '../config/themeConfig';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', THEMES.LIGHT);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--background-color', theme.backgroundColor);
    root.style.setProperty('--text-color', theme.textColor);
    root.style.setProperty('--hover-color', theme.hoverColor);
    root.style.setProperty('--navbar-bg', theme.navbarBgColor);
    root.style.setProperty('--navbar-text-color', theme.navbarTextColor);
    root.style.setProperty('--footer-bg', theme.footerBgColor);
    root.style.setProperty('--footer-text-color', theme.footerTextColor);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
