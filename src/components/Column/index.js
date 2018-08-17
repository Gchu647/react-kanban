import React from 'react';
import Cards from '../Cards';
import'./Column.css';

const Column = props => {
  const sortedCards = prioritySort(props.cards);

  return (
    <div className={props.columnName}>
       <div className="column-header">{props.columnHeader}</div>
       {
         sortedCards.map( cards => {
          return <Cards 
            key={cards.id} 
            title={cards.title}
            status={cards.status.rank}
            priority={cards.priority.name}
            createdBy={cards.createdBy.first_name}
            assignedTo={cards.assignedTo.first_name}
          />
        })
       }
    </div>
  )
}

// Sort the cards based on priority
function prioritySort(cards) {
  return cards.sort(function(a, b) {
    a = a.priority_id;
    b = b.priority_id;
    return a - b;
  })
}

export default Column;