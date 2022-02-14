import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Messages } from './Components/Messages/Messages';

export function App() {
  const text = 'Some Text';
  return (
    <div className="App">
      <div className="app-wrapper">
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
        {/* <Messages text={text} /> */}
      </div>
    </div>
  );
}
