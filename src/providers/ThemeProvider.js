import React, { useEffect, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');

  const toggleTheme = () => { 
    setTheme(theme === 'dark' ? 'light' : 'dark' );
  }

  useEffect(() => { 
    localStorage.setItem('theme', theme);
  }, [theme]);



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;