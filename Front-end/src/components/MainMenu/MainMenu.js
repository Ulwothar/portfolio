import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <nav className="main-navigation">
      <span className="main-menu">
        <ul>
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
              Contact Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              CV
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mateusz-krupa-691774124/"
              target="_blank"
              rel="noreferrer">
              <img
                src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1621369784~hmac=6a65f3b1ad679d56b0cfd53f6501ffbd"
                alt="My linkedIn profile"
              />
            </a>
            <a
              href="https://github.com/Ulwothar"
              target="_blank"
              rel="noreferrer">
              <img
                src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png"
                alt="My github page"
              />
            </a>
          </li>
        </ul>
      </span>
    </nav>
  );
};

export default MainMenu;
