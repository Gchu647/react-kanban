import React from 'react';
import Cards from '../Cards';
import'./Column.css';

const Column = props => {

  // console.log('Column Props: ', props);
  return (
    <div className={props.columnName}>
       <div className="column-header">{props.columnHeader}</div>
       {
         props.cards.map( cards => {
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

export default Column;