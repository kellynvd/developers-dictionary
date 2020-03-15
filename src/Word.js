import React, { Fragment } from 'react';

const Word = ({ word, meaning }) => {
  if (!word) {
    return null;
  }

  return (
    <Fragment>
      <h2>{word}</h2>
      <p>{meaning}</p>
    </Fragment>
  );
}

export default Word;
