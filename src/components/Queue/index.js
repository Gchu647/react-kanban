import React from 'react';
import Cards from '../Cards';

const Queue = props => {

  console.log(props);
  return (
    <div className="queue">
       <div className="queue-header">IN QUEUE</div>
       {
         props.cards.map( cards => {
          return <Cards key={cards.title} title={cards.title} />
        })
       }
    </div>
  )
}

export default Queue;