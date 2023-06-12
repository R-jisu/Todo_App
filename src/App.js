import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{value}</p>
        <div className="btn-container">
          <button
            className="App-button"
            onClick={() => {
              setValue((prev) => prev + 1);
            }}
          >
            +
          </button>
          <button
            className="App-button"
            onClick={() => {
              setValue((prev) => prev - 1);
            }}
          >
            -
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
