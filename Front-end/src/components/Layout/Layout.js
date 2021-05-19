import React from 'react';
import './Layout.css';

import MainHeader from '../MainHeader/MainHeader';
import About from '../About/About';
import Projects from '../Projects/Projects';

const Layout = (props) => {
  return (
    <div className="main-layout">
      <div id="top"></div>
      <div className="content-container" id="main-layout">
        <MainHeader />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default Layout;
