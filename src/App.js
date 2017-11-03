import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar';


import logo from './logo.svg';
import './App.css';
import Draw from './components/Draw';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic Tac Draw</h1>
        </header>

        <Draw initialColor="green"/>
      </div>
    );
  }
}

export default App;
