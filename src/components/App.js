import React from 'react';

import Game from './Game';

function App() {
  return (
    <div>
      <p className="center spacer">&nbsp;</p>
      <h1 className="center GameTitle">HOT or COLD</h1>
      <h3 className="center GameInstructions">Hot or Cold is a guessing game. Guess a number between 
      1 and 100 that the computer randomly picks. Each time 
      you guess, you will see how "hot" or "cold" 
      your guess is to the number. </h3>
      <h3 className="center GameInstructions">See how fast you can find the number!</h3>
      <p className="spacergray">&nbsp;</p>
      <Game />
    </div>
  );
}

export default App;

