import React from 'react';

const Cards = props => {

  console.log(props);
  return (
    <div className="cards">
      <p>Title: {props.title}</p>
      <p>Priority: </p>
      <p>Created by: </p>
      <p>Assigned to: </p>
    </div>
  )
}

export default Cards;