import React, { use, useEffect } from 'react';
import { useTheme } from '../contexts/themeContext';
import '../styles/globals.css';


export function createAccount() {
    const {theme, toggleTheme} = useTheme();

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

  return (
    <div>
      <button className={`button ${theme === 'light' ? 'button-light' : 'button-dark'}`} onClick={toggleTheme}>{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</button>
    </div>
  );
}

export default createAccount;