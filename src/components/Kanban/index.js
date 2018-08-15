import React, { Component } from 'react';
import './Kanban.css';
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
