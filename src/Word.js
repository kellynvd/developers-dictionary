import React, { Fragment } from 'react';

const Word = ({ word, meaning, source }) => {
  if (!word) {
    return null;
  }

  return (
    <Fragment>
      <h2>{word}</h2>
      <p>{meaning}</p>
      <p>
        Source: <a href={source.url} target='blank'>{source.name}</a>
      </p>

    </Fragment>
  );
}

export default Word;
