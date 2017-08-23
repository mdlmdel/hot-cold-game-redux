import React from 'react';

function GuessesList({guesses}) {
  return (
    <div>
      {guesses.map((guess, i) => (
        <li key={i}>{guess}&nbsp;&nbsp;</li>
      ))}
    </div>
  );
}

export default GuessesList;