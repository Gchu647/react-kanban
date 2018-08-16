import React from 'react';
import Cards from '../Cards';

const Queue = props => {

  console.log(props);
  return (
    <div className="queue">
       <div className="queue-header">IN QUEUE</div>
    </div>
  )
}

export default Queue;

// {
//   props.cards.map( cards => {
//    return <Cards key={cards.title} title={cards.title} />
//  })
// }