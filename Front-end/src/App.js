import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
