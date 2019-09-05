import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canva from './Canva/Canva.js';
import Navbar from './Navbar/Navbar.js';
import Tools from './Tools/Tools.js';
import Download from './Download/Download.js';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <div className='container'>
          <Tools></Tools>
          <Canva></Canva>
          <Download></Download>
        </div>
    </div>
  );
}

export default App;