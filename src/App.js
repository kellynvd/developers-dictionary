import React, { useState } from 'react';
import dictionary from './dictionary'
import Word from './Word'
import './App.css';

const App = () => {
  const [currentWord, setCurrentWord] = useState();

  const onChange = ({ target: { value }}) => {
    const foundWord = dictionary.find(({ word }) => word === value)
    setCurrentWord(foundWord)
  }

  return (
    <div className="App">
      <h1>Developer's Dictionary</h1>
      <input type='text' placeholder='Search...' onChange={onChange} />
      <Word {...currentWord} />
    </div>
  );
}

export default App;
