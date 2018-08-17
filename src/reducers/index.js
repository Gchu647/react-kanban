import  { LOAD_CARDS } from '../actions';

const initialState = [];

const cardsList = (state = initialState, action) => { // what is the action being passed in?
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards];  
    default:
      return state;
  }
}

export default cardsList;