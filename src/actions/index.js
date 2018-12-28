export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DEL_CARD = 'DEL_CARD';
export const EDIT_CARD = 'EDIT_CARD';

export const loadCards = (cards) => ({
  type: LOAD_CARDS,
  cards: cards
})

export const addCard = (card) => ({
  type: ADD_CARD,
  card: card
})

export const delCard = (card) => ({
  type: DEL_CARD,
  card: card
})

export const editCard = (card) => ({
  type: EDIT_CARD,
  card: card
})