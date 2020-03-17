import React from 'react';
import dictionary from './dictionary'

export default function Filter({setCurrentWord}) {
  const onChange = ({ target: { value }}) => {
    if (value === '') {
      setCurrentWord(null);
      return;
    }

    const foundWord = dictionary.find(({ word }) => word.toLowerCase().search(value.toLowerCase()) !== -1);
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
