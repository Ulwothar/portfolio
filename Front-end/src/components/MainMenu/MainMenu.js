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
            <div className="image-link">
              <a
                href="https://www.linkedin.com/in/mateusz-krupa-691774124/"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"
                  alt="My linkedIn profile"
                />
              </a>
            </div>
            <div className="image-link">
              <a
                href="https://github.com/Ulwothar"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png"
                  alt="My github page"
                />
              </a>
            </div>
          </li>
        </ul>
      </span>
    </nav>
  );
};

export default MainMenu;
