import React from 'react';
import './App.css';
import './components/HeaderComp.js';
import HeaderComp from './components/HeaderComp.js';
import SearchComp from './components/SearchComp.js';
import TitleComp from './components//TitleComp.js';

function App() {
  return (
    <div className="App">
      <div><HeaderComp /></div>
      <div><SearchComp /></div>
      <div><TitleComp /></div>
    </div>
  );
}

export default App;