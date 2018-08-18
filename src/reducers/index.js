import  { LOAD_CARDS, ADD_CARD } from '../actions';

const initialState = [];

const cardsList = (state = initialState, action) => { // what is the action being passed in?
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards];
    case ADD_CARD:
      return [...state, action.card];
    default:
      return state;
  }
}

export default cardsList;