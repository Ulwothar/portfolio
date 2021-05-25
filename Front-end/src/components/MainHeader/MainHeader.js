import React, { useEffect } from 'react';
import './MainHeader.css';

const MainHeader = () => {
  useEffect(() => {
    const header = document.getElementById('main-header');
    header.classList.toggle('main-header-visible');
  }, []);

  return (
    <>
      <header className="main-header" id="main-header">
        <h1>Mateusz Krupa</h1>
      </header>
    </>
  );
};

export default MainHeader;
