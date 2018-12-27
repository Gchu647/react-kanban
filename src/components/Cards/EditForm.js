import React from 'react';

const EditForm = props => {

  const {
    title,
    cardForm,
    formHandler
  } = props;

  return (      
    <div className={ cardForm }>
      <hr/>
      <label htmlFor='title'>
        <input type='text' name ='title' value={ title } />
      </label>
      <br/>

      {/* Missing body input */}
      {/* Missing status */}

       <label htmlFor='statusId'>Status:
        <select name='statusId' >
          <option value=''>select</option>
          <option value='1'>Queue</option>
          <option value='2'>Progress</option>
          <option value='3'>Done</option>
        </select>
      </label>
      <br/>

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

      <button onClick={ formHandler }> Submit </button>
    </div>
  )
}

export default EditForm;
