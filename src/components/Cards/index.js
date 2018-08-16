import React from 'react';

const Cards = cards => {

  console.log(cards);
  return (
    <div className="cards">
      <p>Title: {cards.title}</p>
      <p>Priority: {cards.priority}</p>
      <p>Created by: {cards.createdBy}</p>
      <p>Assigned to: {cards.assignedTo}</p>
    </div>
  )
}

export default Cards;