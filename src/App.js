import React from 'react';
import logo from './logo.svg';
import './App.css';

import Facebook from './components/facebook';
import Google from './components/google';

function App() {
  return (
    <div className="App">
        <h2>
          Modul Login ReactJs 2020
        </h2>
      <body>
        <Facebook/>
        <br/>
        <Google/>
      </body>
    </div>
  );
}

export default App;
