import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delCard, editCard } from '../../actions';
import axios from 'axios';
import EditForm from './EditForm';
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusId: '',
      priorityId: '',
      createdBy: '',
      assignedTo: '',
      cardForm: 'hide',
    }

    console.log('card' + this.props.cardId + 'props :' + this.props); // We have access to card id
    this.showForm = this.showForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteCardById = this.deleteCardById.bind(this);
    this.editCardById = this.editCardById.bind(this);
  }

  showForm() {
    console.log('show form method', this.state)
    if(this.state.cardForm === 'show') {
      this.setState({cardForm: 'hide'});
    } else {
      this.setState({cardForm: 'show'});
    }
  }

  handleInputChange(event) {
    switch (event.target.name) {
      // not changing title
      case 'statusId':
        this.setState({ statusId: event.target.value })
        break;
      case 'priorityId':
        this.setState({ priorityId: event.target.value })
        break;
      case 'createdBy':
        this.setState({ createdBy: event.target.value })
        break;
      case 'assignedTo':
        this.setState({ assignedTo: event.target.value })
        break;
      default:
        break;
    }
  }

  deleteCardById() {
    axios.delete(`/api/cards/${this.props.cardId}`)
      .then( response => {
        const card = response.data;
        this.props.delCard(card);
      })
      .catch( err => console.log(err));
  }

  editCardById() {
    const data = {};
    data.title = this.props.title;
    data.body = '';
    data.status_id = this.state.statusId;
    data.priority_id = this.state.priorityId;
    data.created_by = this.state.createdBy;
    data.assigned_to = this.state.assignedTo;

    axios.put(`/api/cards/${this.props.cardId}`, data)
      .then(response => {
        const card = response.data;
        this.props.editCard(card);
      })
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

        <EditForm 
          title={ title } 
          cardForm={ this.state.cardForm }
          changeHandler={this.handleInputChange} 
          formHandler={ this.editCardById }  
        />
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
    },
    editCard: (card) => {
      dispatch(editCard(card));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);