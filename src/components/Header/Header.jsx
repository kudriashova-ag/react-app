import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import ThemeContext from '../../contexts/ThemeContext';

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/users">Users</NavLink>

      { theme === 'dark' ? <LightModeIcon onClick={toggleTheme} /> : <DarkModeIcon  onClick={toggleTheme}/> }
      

    </header>
  );
}

export default Header;
