import React from 'react';

export default function SelectLanguage ({setCurrentLanguage}) {

  const onClick = ({ target: { value }}) => {
    setCurrentLanguage(value);
  }

  return (
    <div>
      <button value='EN' onClick={onClick}>EN</button>
      <button value='PT'onClick={onClick}>PT</button>
    </div>
  );
}
