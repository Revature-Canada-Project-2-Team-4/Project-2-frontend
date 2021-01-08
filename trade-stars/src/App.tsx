import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FNTextField} from './remote/trade-stars/components/TradesmanRegistration/Firstname';
import { LNTextField } from './remote/trade-stars/components/TradesmanRegistration/LastName';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Branch example</h1>
        <FNTextField/>
        <LNTextField/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
