const INITAL_STATE = {
  randomNumber: Math.floor(Math.random() * 100) + 1,
  guesses: [], 
  alertBox: {
    backgroundColor: null, 
    text: ''
  }
}

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'GUESS_NUMBER': 
      return {
        ...state,
        guesses: [...state.guesses, action.num]
      }
    case 'GAME_FEEDBACK': 
      return {
        ...state, 
        alertBox: {
          backgroundColor: action.color, 
          text: action.text
        }
      }
    case 'NEW_GAME':
      return INITAL_STATE;
    default:
      return state;
  }
};