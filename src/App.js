import React, { useState } from 'react';
import SelectLanguage from './SelectLanguage';
import Filter from './Filter';
import Word from './Word';
import './App.css';

const App = () => {
  const [currentWord, setCurrentWord] = useState();
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  return (
    <div className="App">
      <SelectLanguage setCurrentLanguage={setCurrentLanguage} />
      {currentLanguage}
      <h1>Developer's Dictionary</h1>
      <Filter setCurrentWord={setCurrentWord} currentLanguage={currentLanguage} />
      <Word {...currentWord} />
    </div>
  )
}

export default App;
