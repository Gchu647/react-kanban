import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions';
import axios from 'axios';
import './Kanban.css';
import Board from '../Board';
import NewCardForm from '../NewCardForm';

class Kanban extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [],
      titleInput: '',
      bodyInput: '',
      priorityId: '',
      createdBy: '',
      assignedTo: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
  }

  componentDidMount() {
    axios.get('/api/cards')
      .then( response => {
        // console.log(JSON.stringify(response.data));
        this.props.loadCards(response.data);
      })
      .catch( err => console.log(err));
  }

  handleInputChange(event) {
    console.log('change this event: ', event.target.value)
    switch (event.target.name) {
      case 'title':
        this.setState({ titleInput: event.target.value })
        break;
      case 'body':
        this.setState({ bodyInput: event.target.value })
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

  addNewCard() {
    const data = {};
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.priority_id = this.state.priorityId;
    data.created_by = this.state.createdBy;
    data.assigned_to = this.state.assignedTo;

    console.log('add new cards: ', data);

    // this.setState(prevState => {
    //   return {
    //     cards: prevState.cards.concat(data),
    //     titleInput: '',
    //     bodyInput: '',
    //     priorityId: '',
    //     createdBy: '',
    //     assignedTo: '',
    //   }})

  
    axios.post('/api/cards', data)
      .then( response => {
        const card = response.data;
        this.setState(prevState => {
          return {
            cards: prevState.cards.concat(card),
            titleInput: '',
            bodyInput: '',
            priorityId: '',
            createdBy: '',
            assignedTo: '',
          }
        })
      })

  }

  render() {
    return (
      <div className="Kanban">
        <header className="Kanban-header">
          <p className="Kanban-title">KANBAN</p>
        </header>

        <Board cardsList ={ this.props.cards }/>
        <br/>
        <NewCardForm // switch to props input later
          titleInput={ this.state.titleInput }
          bodyInput={ this.state.bodyInput }
          priorityId={ this.state.priorityId }
          createdBy={ this.state.createdBy }
          assignedTo={ this.state.assignedTo }
          changeHandler={ this.handleInputChange }
          formHandler={ this.addNewCard}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state // I don't need state.cardsList, because my reducer export is the state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);