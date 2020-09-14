import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Basic from './components/Basic';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
import TimerContainer from './components/TimerContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic name="tanioka" age="24" /> */}
        {/* <Basic2/> */}
        {/* <BasicUseEffect/> */}
        <TimerContainer />
      </header>
    </div>
  );
}

export default App;
