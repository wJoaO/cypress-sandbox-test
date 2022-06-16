import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [state, dispatchState] = useState(false);
  function handleClick(){
    dispatchState(true)
  }

  console.log("State", state);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p onClick={handleClick} id="click-on-me">
          Click on me
        </p>
        {state ? <p id="visual">Clicked on the Click on me</p> : <></>}
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
