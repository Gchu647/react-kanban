import React, { Component } from 'react';
import './Kanban.css';
import axios from 'axios';
import Column from '../Column';
import { connect } from 'react-redux';
import { loadCards } from '../../actions';

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

        <div className="Kanban-body">
          <Column 
            cards={this.props.cards} //changed state to props
            columnName="queue"
            columnHeader="IN QUEUE"
            // columnBody="queue-body" 
          />
          <Column 
            cards={[]}
            columnName="progress"
            columnHeader="IN PROGRESS"
          />
          <Column 
            cards={[]}
            columnName="done"
            columnHeader="DONE"
          />
        </div>
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