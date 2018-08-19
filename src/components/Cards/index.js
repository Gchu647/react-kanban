import React from 'react';
import EditForm from './EditForm';
import './Cards.css';

const Cards = ({title, priority, status, createdBy, assignedTo, cardEdit}) => {

  return (
    // Default card content
    <div className="cards">
      <p>Title: {title}</p>
      <p>Priority: {priority}</p>
      <p>Status: {status} </p>
      {/* <p>Created by: {createdBy}</p>
      <p>Assigned to: {assignedTo}</p> */}
      <button>Edit</button>

      <EditForm title={ title } />
    </div>
  )
}

export default Cards;