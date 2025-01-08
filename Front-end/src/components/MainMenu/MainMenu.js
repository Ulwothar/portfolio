import React, { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import './MainMenu.css';
import MyCV from '../../utils/MateuszKrupaCV.pdf';

const MainMenu = () => {
  let nav;

  useEffect(() => {
    nav = document.getElementById('main-navigation');
    nav.classList.add('main-navigation-visible');
  }, []);

  const addChangeClass = () => {
    let element = document.getElementById('hamburger');
    element.classList.toggle('change');
    nav.classList.toggle('main-navigation-open');
  };
  return (
    <nav className="main-navigation" id="main-navigation">
      <div className="hamburger" id="hamburger" onClick={addChangeClass}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <span className="main-menu">
        <a href="/" className="link-imitation">
          menu() ={'> {'}
        </a>
        <hr></hr>
        <li onClick={addChangeClass}>
          <NavHashLink
            to="#main-header"
            activeClassName="selected"
            smooth="true"
            activeStyle={{ color: 'red' }}>
            About()
          </NavHashLink>
        </li>
        <hr></hr>
        <li onClick={addChangeClass}>
          <NavHashLink
            to="#projects"
            activeClassName="selected"
            smooth="true"
            activeStyle={{ color: 'red' }}>
            Projects()
          </NavHashLink>
        </li>
        <hr></hr>
        <li onClick={addChangeClass}>
          <NavHashLink
            to="#footer"
            activeClassName="selected"
            smooth="true"
            activeStyle={{ color: 'red' }}>
            Contact Me()
          </NavHashLink>
        </li>
        <hr></hr>
        <li onClick={addChangeClass}>
          <a href={MyCV} target="_blank" rel="noreferrer">
            CV()
          </a>
        </li>
        {/* <li onClick={addChangeClass}>
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
        </li> */}
        <a href="/" className="link-imitation">
          {'}'}
        </a>
      </span>
    </nav>
  );
};

export default MainMenu;
