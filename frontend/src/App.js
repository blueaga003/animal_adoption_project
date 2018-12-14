import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting/greeting.js';
// import other components we want to render here such as a NAVBAR for example

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      <Greeting/> 
     </div>
    );
  }
}

export default App;
