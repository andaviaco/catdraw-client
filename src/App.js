import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';


import logo from './logo.svg';
import './App.css';
import Draw from './components/Draw';




class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to CatDraw</h1>
          </header>

          {/* <AppBar
            title="CatDraw App"
            showMenuIconButton={false}
          /> */}

          <Draw />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
