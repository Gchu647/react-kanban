import React from 'react';

const Cards = ({title, priority, createdBy, assignedTo}) => {

  return (
    <div className="cards">
      <p>Title: {title}</p>
      <p>Priority: {priority}</p>
      <p>Created by: {createdBy}</p>
      <p>Assigned to: {assignedTo}</p>
    </div>
  )
}

export default Cards;