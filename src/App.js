import logo from './logo.svg';
import './App.css';
import Messages from './Components/Messages/Messages'
import { BrowserRouter } from 'react-router-dom';

function App() {
  const text = 'Some Text'
  return (
    <div className="App">
      <div className="app-wrapper">
        <BrowserRouter>
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
          <Messages text={text} />
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
