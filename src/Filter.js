import React from 'react';
import dictionary from './dictionary'

export default function Filter({setCurrentWord, currentLanguage}) {
  const onChange = ({ target: { value }}) => {
    if (value === '') {
      setCurrentWord(null);
      return;
    }

    let foundWord = {}

    if (currentLanguage === 'EN') {
      foundWord = dictionary.en.find(({ word }) => word.toLowerCase().search(value.toLowerCase()) !== -1);
    } else {
      foundWord = dictionary.pt.find(({ word }) => word.toLowerCase().search(value.toLowerCase()) !== -1);
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
