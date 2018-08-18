import React from 'react';
import './Cards.css'

const Cards = ({title, priority, status, createdBy, assignedTo}) => {

  // An option to render a form version called card-form
  // Then add in the edit button that changes it
  return(
    <div className='edit-card-form'>
      <label htmlFor='title'>Card Title:
        <input type='text' name ='title' value={ title } />
      </label>
      <br/>

      {/* Missing body input */}
      {/* Missing status */}

      <label htmlFor='priorityId'>Priority:
        <select name='priorityId' >
          <option value=''>select</option>
          <option value='1'>high</option>
          <option value='2'>blocker</option>
          <option value='3'>medium</option>
          <option value='4'>low</option>
        </select>
      </label>
      <br/>

      <label htmlFor='createdBy'>Created By:
        <select name='createdBy'>
        <option value=''>select</option>
          <option value='1'>John</option>
          <option value='2'>James</option>
          <option value='3'>Alan</option>
          <option value='4'>Surya</option>
          <option value='5'>Andy</option>
        </select>
      </label>
      <br/>

      <label htmlFor='assignedTo'>Assigned To:
        <select name='assignedTo'>
          <option value=''>optional</option>
          <option value='1'>John</option>
          <option value='2'>James</option>
          <option value='3'>Alan</option>
          <option value='4'>Surya</option>
          <option value='5'>Andy</option>
        </select>
      </label>
    </div>
  )
}

export default Cards;

  // return (
  //   <div className="cards">
  //     <p>Title: {title}</p>
  //     <p>Priority: {priority}</p>
  //     <p>Status: {status} </p>
  //     {/* <p>Created by: {createdBy}</p>
  //     <p>Assigned to: {assignedTo}</p> */}
  //   </div>
  // )