import React from 'react';
import Cards from '../Cards';

const Queue = props => {

  console.log(props);
  return (
    <div className="queue">
       <div className="queue-header">IN QUEUE</div>
       {
         props.cards.map( cards => {
          return <Cards 
            key={cards.id} 
            title={cards.title}
            priority={cards.priority.name}
            createdBy={cards.createdBy.first_name}
            assignedTo={cards.assignedTo.first_name}
          />
        })
       }
    </div>
  )
}

export default Queue;