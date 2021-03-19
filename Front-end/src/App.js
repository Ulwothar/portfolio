import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import MainHeader from './components/MainHeader/MainHeader';

function App() {
  return (
    <Router>
      <MainHeader />
    </Router>
  );
}

export default App;
