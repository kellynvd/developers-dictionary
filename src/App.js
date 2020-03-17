import React, { useState } from 'react';
import dictionary from './dictionary'
import Word from './Word'
import './App.css';

const App = () => {
  const [currentWord, setCurrentWord] = useState();

  const onChange = ({ target: { value }}) => {
    if (value === '') {
      return setCurrentWord(null);
    }

    const foundWord = dictionary.find(({ word }) => word.toLowerCase().search(value.toLowerCase()) !== -1);
    setCurrentWord(foundWord);
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
