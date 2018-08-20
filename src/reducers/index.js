import  { LOAD_CARDS, ADD_CARD, DEL_CARD } from '../actions';

const initialState = [];

const cardsList = (state = initialState, action) => { // what is the action being passed in?
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards];
    case ADD_CARD:
      return [...state, action.card];
    case DEL_CARD:
      let newState = [state];
      let index = newState.indexOf(action.card);
      newState.splice(index, 1);
      
      return newState;
    default:
      return state;
  }
}

export default cardsList;