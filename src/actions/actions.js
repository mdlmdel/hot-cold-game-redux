// Added to create-react-app version

export const gameFeedback = (text, color, border) => ({
type: 'GAME_FEEDBACK',
text, 
color, 
border
});

const addNumberToGuesses = num => ({type: 'GUESS_NUMBER', num})

export const guessNumber = num => (dispatch, getState) => {
  if (isNaN(num)) {
    return dispatch(gameFeedback('Not a number', 'red'))
  }
  const {randomNumber} = getState();
  console.log('This is the random number', randomNumber);
  dispatch(addNumberToGuesses(num));
  const difference = Math.abs(num - randomNumber) 
  if (difference >= 50) {
    return dispatch(gameFeedback('Ice cold...', '#10316B', '#ffffff'))
  }
  else if (difference >= 30) {
    return dispatch(gameFeedback('You\'re Cold...', '#0B409C')) 
  }
  else if (difference >= 10) {
    return dispatch(gameFeedback('You\'re Warm', '#FB9935'))
  } 
  else if (difference >= 1) {
    return dispatch(gameFeedback('You\'re Hot!', '#B90B0B'))
  } 
    return dispatch(gameFeedback('You got it!', '#8C0909'))
  }
export const NEW_GAME = 'NEW_GAME';
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const GAME_FEEDBACK = 'GAME_FEEDBACK';
export const newGame = () => ({ type: NEW_GAME });


//const ROOT_URL = 'http://localhost:8080';
//const ROOT_URL = 'https://hot-cold-game-react.herokuapp.com';
