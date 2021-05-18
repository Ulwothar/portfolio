import React from 'react';
import './Layout.css';

import MainHeader from '../MainHeader/MainHeader';
import About from '../About/About';

const Layout = (props) => {
  return (
    <div className="main-layout">
      <MainHeader />
      <div className="content-container">
        <About />
      </div>
    </div>
  );
};

export default Layout;
