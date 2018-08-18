export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const loadCards = (cards) => ({
  type: LOAD_CARDS,
  cards: cards
})

export const addCard = (card) => ({
  type: ADD_CARD,
  card: card
})