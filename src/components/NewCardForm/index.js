import React from 'react';
import './NewCardForm.css';

const NewCardForm = props => {

  return(
    <div className = 'new-card-form'>
      <label htmlFor='title'>
        Card Title:
        <input type='text' name ='title' />
      </label>

      <label htmlFor='body'>Description:
        <input type='text' name ='body' />
      </label>

      <label htmlFor='priority_id'>Priority:
        <select name='priority_id'>
          <option value='1'>high</option>
          <option value='2'>blocker</option>
          <option value='3'>medium</option>
          <option value='4'>low</option>
        </select>
      </label>

      <label htmlFor='created_by'>Created By:
        <select name='created_by'>
          <option value='1'>John</option>
          <option value='2'>James</option>
          <option value='3'>Alan</option>
          <option value='4'>Surya</option>
          <option value='5'>Andy</option>
        </select>
      </label>

      <label htmlFor='assigned_to'>Assigned To:
        <select name='assigned_to'>
          <option value=''>Null</option>
          <option value='1'>John</option>
          <option value='2'>James</option>
          <option value='3'>Alan</option>
          <option value='4'>Surya</option>
          <option value='5'>Andy</option>
        </select>
      </label>

      <button> Create Card </button>
    </div>
  )
}

export default NewCardForm;