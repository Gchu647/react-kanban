import React, { Component } from 'react';
import axios from 'axios';
import EditForm from './EditForm';
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardForm: 'hide',
      hi: 'hi'
    }

    console.log('Cards_id: ', this.props.cardId); // We have access to card id
    this.showForm = this.showForm.bind(this);
    this.deleteCardById = this.deleteCardById.bind(this);
  }

  showForm() {
    console.log('show form method', this.state)
    if(this.state.cardForm === 'show') {
      this.setState({cardForm: 'hide'});
    } else {
      this.setState({cardForm: 'show'});
    }
  }

  deleteCardById() {
    console.log('delete card');
    axios.delete(`/api/cards/${this.props.cardId}`)
      .then( response => {
        console.log('axios delete', response);
      })
      .catch( err => console.log(err));
    //WORKING ON THIS
  }

  render() {
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
        <button onClick={ this.deleteCardById}> Delete</button>

        <EditForm title={ title } cardForm={ this.state.cardForm }/>
      </div>
    )
  }
}

export default Cards;