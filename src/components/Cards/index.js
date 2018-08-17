import React from 'react';
import './Cards.css'

const Cards = ({title, priority, status, createdBy, assignedTo}) => {

  return (
    <div className="cards">
      <p>Title: {title}</p>
      <p>Priority: {priority}</p>
      <p>Status: {status} </p>
      {/* <p>Created by: {createdBy}</p>
      <p>Assigned to: {assignedTo}</p> */}
    </div>
  )
}

export default Cards;