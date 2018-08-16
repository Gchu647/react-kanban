import React, { Component } from 'react';
import './Kanban.css';
import axios from 'axios';
import Column from '../Column';

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
        this.setState({ cards: response.data})
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
            cards={this.state.cards}
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

export default Kanban;