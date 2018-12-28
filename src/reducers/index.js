import  { LOAD_CARDS, ADD_CARD, DEL_CARD, EDIT_CARD } from '../actions';

const initialState = [];

const cardsList = (state = initialState, action) => { // what is the action being passed in?
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards];
    case ADD_CARD:
      return [...state, action.card];
    case DEL_CARD:
      console.log('This is original state: ', [...state]);
      console.log('this is action.card: ', action.card);

      let newState = state.filter(card => {
        return card.id !== action.card.id;
      });

      console.log('Index of NEW state: ', newState);
      
      return newState;
    case EDIT_CARD:
      let oldCardRemoved = state.filter(card => {
        return card.id !== action.card.id;
      });

      console.log('oldCardRemoved: ', oldCardRemoved);

      return [...oldCardRemoved, action.card];
    default:
      return state;
  }
}

export default cardsList;