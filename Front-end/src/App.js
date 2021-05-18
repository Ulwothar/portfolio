import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <main>
      <Router>
        <Layout />
      </Router>
    </main>
  );
}

export default App;
