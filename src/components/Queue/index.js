import React from 'react';
import Cards from '../Cards';

const Queue = props => {

  console.log('hi');
  return (
    <div className="queue">
       <div className="queue-header">IN QUEUE</div>
      <Cards />
    </div>
  )
}

export default Queue;