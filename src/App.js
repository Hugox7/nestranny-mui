import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';
import Header from './components/Header';
import Home from './pages/Home';

const  App = () => {
  return (
    <div className="app">
      <div style={{ height: '75px' }} />
      <Header />
      <Switch>
        <Route exact to='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
