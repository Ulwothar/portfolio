import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import './MainMenu.css';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  console.log(yCoordinate);
  el.scrollTo(0, 0);
};

const MainMenu = () => {
  return (
    <nav className="main-navigation">
      <span className="main-menu">
        <ul>
          <li>
            <NavHashLink
              to="#about"
              activeClassName="selected"
              smooth="true"
              activeStyle={{ color: 'red' }}>
              About
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              to="#projects"
              activeClassName="selected"
              smooth="true"
              activeStyle={{ color: 'red' }}>
              Projects
            </NavHashLink>
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
