import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import './App.css';

import Header from './Header';
import Routes from './routes';


class App extends Component {
  constructor() {
    super();
    this.state = {
      token: ''
    };
    this.onTokenChanged = this.onTokenChanged.bind(this);
  };
  onTokenChanged(newToken) {
    this.setState({
      token: newToken,
    })
  };
  render() {
    const {token} = this.state;
    return (
      <BrowserRouter>
        <div>
          <Header token={token} onTokenChanged={this.onTokenChanged} />
          <Routes token={token} onTokenChanged={this.onTokenChanged} />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
