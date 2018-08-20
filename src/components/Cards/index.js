import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delCard } from '../../actions';
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
    axios.delete(`/api/cards/${this.props.cardId}`)
      .then( response => {
        const card = response.data;
        this.props.delCard(card);
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

const mapStateToProps = state => {
  return {
    cards: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delCard: (card) => {
      dispatch(delCard(card));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);