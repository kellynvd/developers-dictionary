import React, { useState } from 'react';
import Word from './Word'
import Filter from './Filter'
import './App.css';

const App = () => {
  const [currentWord, setCurrentWord] = useState();

  return (
    <div className="App">
      <h1>Developer's Dictionary</h1>
      <Filter setCurrentWord={setCurrentWord} />
      <Word {...currentWord} />
    </div>
  );
}

export default App;
