import React from 'react';
import './Layout.css';

import MainHeader from '../MainHeader/MainHeader';
import About from '../About/About';
import Projects from '../Projects/Projects';
import MainMenu from '../MainMenu/MainMenu';

const Layout = (props) => {
  return (
    <div className="main-layout">
      <div className="content-container" id="main-layout">
        <MainHeader />
        <MainMenu />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default Layout;
