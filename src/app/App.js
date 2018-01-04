import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import './App.css';

import Header from './Header';
import Routes from './routes';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
