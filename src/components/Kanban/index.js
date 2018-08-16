import React, { Component } from 'react';
import './Kanban.css';
import axios from 'axios';
import Queue from '../Queue';
import Progress from '../Progress';
import Done from '../Done';

class Kanban extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [],
    }
  }


  componentDidMount() {
    axios.get('/api')
      .then( response => {
        console.log(JSON.stringify(response.data));
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
          <Queue />
          <Progress />
          <Done />
        </div>
      </div>
    );
  }
}

export default Kanban;

{/* <Queue cards={ this.state.cards } /> */}