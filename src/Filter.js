import React from 'react';
import enDictionary from './dictionary.en'
import ptDictionary from './dictionary.pt'

export default function Filter({setCurrentWord, currentLanguage}) {
  const onChange = ({ target: { value }}) => {
    if (value === '') {
      setCurrentWord(null);
      return;
    }

    let foundWord = {}

    if (currentLanguage === 'EN') {
      foundWord = enDictionary.find(({ word }) => word.toLowerCase().search(value.toLowerCase()) !== -1);
    } else {
      foundWord = ptDictionary.find(({ word }) => word.toLowerCase().search(value.toLowerCase()) !== -1);
    }

    setCurrentWord(foundWord);
  }

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={onChange}
    />
  )
}
