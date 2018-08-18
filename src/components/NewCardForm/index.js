import React from 'react';
import './NewCardForm.css';

const NewCardForm = props => {
  const { // clean up props value
    titleInput,
    bodyInput,
    priorityId,
    createdBy,
    assignedTo,
    changeHandler,
    formHandler,
  } = props;

  return(
    <div className = 'new-card-form'>
      <label htmlFor='title'>Card Title:
        <input type='text' name ='title' value={ titleInput } onChange={ changeHandler } />
      </label>

      <label htmlFor='body'>Description:
        <input type='text' name ='body' value={ bodyInput } onChange={ changeHandler }/>
      </label>

      <label htmlFor='priorityId'>Priority:
        <select name='priorityId' value={ priorityId } onChange={ changeHandler }>
          <option value=''>select</option>
          <option value='1'>high</option>
          <option value='2'>blocker</option>
          <option value='3'>medium</option>
          <option value='4'>low</option>
        </select>
      </label>

      <label htmlFor='createdBy'>Created By:
        <select name='createdBy' value={ createdBy } onChange={ changeHandler }>
        <option value=''>select</option>
          <option value='1'>John</option>
          <option value='2'>James</option>
          <option value='3'>Alan</option>
          <option value='4'>Surya</option>
          <option value='5'>Andy</option>
        </select>
      </label>

      <label htmlFor='assignedTo'>Assigned To:
        <select name='assignedTo' value={ assignedTo } onChange={ changeHandler }>
          <option value=''>optional</option>
          <option value='1'>John</option>
          <option value='2'>James</option>
          <option value='3'>Alan</option>
          <option value='4'>Surya</option>
          <option value='5'>Andy</option>
        </select>
      </label>

      <button onClick={ formHandler }> Create Card </button>
    </div>
  )
}

export default NewCardForm;