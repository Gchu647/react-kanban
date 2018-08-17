import React from 'react';
import Column from '../Column';
import './Board.css'

const Board = ({ cardsList }) => {
  // console.log("Board cards: ", cardsList);  

  return (
    <div className="Kanban-board">
    <Column 
      cards={filterByStatus(cardsList, "queue")}
      columnName="queue"
      columnHeader="IN QUEUE"
      // columnBody="queue-body" 
    />
    <Column 
      cards={filterByStatus(cardsList, "progress")} 
      columnName="progress"
      columnHeader="IN PROGRESS"
    />
    <Column 
      cards={filterByStatus(cardsList, "done")} 
      columnName="done"
      columnHeader="DONE"
    />
  </div>
  )
}

// decides which column the cards goes in
function filterByStatus(cardsList, columnName) {
  switch (columnName) {
    case 'queue':
      return cardsList.filter((card) =>{
        return card.status.rank === 1;
      });
    case 'progress':
      return cardsList.filter((card) =>{
        return card.status.rank === 2;
      });
    case 'done':
      return cardsList.filter((card) =>{
        return card.status.rank === 3;
      });
    default:
      break;
  }
}

export default Board;