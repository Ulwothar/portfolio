import React from 'react';
import './MainHeader.css';

import MainMenu from '../MainMenu/MainMenu';

const MainHeader = () => {
  return (
    <>
      <header className="main-header">
        <h1>Mateusz Krupa</h1>
      </header>
      <MainMenu />
    </>
  );
};

export default MainHeader;
