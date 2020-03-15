import React from 'react';
import words from './words'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Developer's Dictionary</h1>
      <input type='text' placeholder='Search...' />
      <h2>{words[0].word}</h2>
      <p>{words[0].definition}</p>
    </div>
  );
}

export default App;
