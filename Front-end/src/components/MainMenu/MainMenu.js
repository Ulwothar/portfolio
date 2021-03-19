import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <nav className="main-navigation">
      <span className="main-menu">
        <li>
          <NavLink to="/" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact>
            Contact Me
          </NavLink>
        </li>
      </span>
    </nav>
  );
};

export default MainMenu;
