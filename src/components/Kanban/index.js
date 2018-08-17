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
    }
  }

  componentDidMount() {
    axios.get('/api/cards')
      .then( response => {
        // console.log(JSON.stringify(response.data));
        this.props.loadCards(response.data);
      })
      .catch( err => console.log(err));
  }

  render() {
    return (
      <div className="Kanban">
        <header className="Kanban-header">
          <p className="Kanban-title">KANBAN</p>
        </header>

        <Board cardsList ={ this.props.cards }/>
        <br/>
        <NewCardForm />
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