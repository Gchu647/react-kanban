import React, { Component } from 'react';
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
    if(this.state.cardEdit === 'show') {
      this.setState({cardEdit: 'hide'});
      console.log('Column: hide');
    } else {
      this.setState({cardEdit: 'show'});
      console.log('Column: show');
    }
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
        <button>Edit</button>

        <EditForm title={ title } />
      </div>
    )
  }
}

export default Cards;