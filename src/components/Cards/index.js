import React, { Component } from 'react';
import axios from 'axios';
import EditForm from './EditForm';
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardForm: 'hide' 
    }

    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    if(this.state.cardForm === 'show') {
      this.setState({cardForm: 'hide'});
      console.log('Column: hide');
    } else {
      this.setState({cardForm: 'show'});
      console.log('Column: show');
    }
  }

  editCard() {
    const data = {};
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.priority_id = this.state.priorityId;
    data.created_by = this.state.createdBy;
    data.assigned_to = this.state.assignedTo;
  }

  render() {
  console.log('Cards: ', this.props);
  let { title, priority, status } = this.props;
    return(
      // Default card content
      <div className="cards">
        <p>Title: {title}</p>
        <p>Priority: {priority}</p>
        <p>Status: {status} </p>
        {/* <p>Created by: {createdBy}</p>
        <p>Assigned to: {assignedTo}</p> */}
        <button onClick={ this.showForm }>Edit</button>

        <EditForm title={ title } cardForm={ this.state.cardForm }/>
      </div>
    )
  }
}

export default Cards;