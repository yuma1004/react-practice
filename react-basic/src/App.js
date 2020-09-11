import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basic from './components/Basic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic name="tanioka" age="24"/>
      </header>
    </div>
  );
}

export default App;
