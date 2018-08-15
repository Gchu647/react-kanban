import React, { Component } from 'react';
import './Kanban.css';
import Queue from '../Queue';
import Progress from '../Progress';
import Done from '../Done';

class Kanban extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [
        {title: 'task1', body: 'Just do it', priority_id: 1, status_id: 1, created_by: 1, assigned_to: 2},
        {title: 'task2', body: 'Just do it', priority_id: 1, status_id: 1, created_by: 1, assigned_to: 2},
        {title: 'task3', body: 'Just do it', priority_id: 1, status_id: 1, created_by: 1, assigned_to: 2},
      ],
    }
  }



  render() {
    return (
      <div className="Kanban">
        <header className="Kanban-header">
          <p className="Kanban-title">KANBAN</p>
        </header>

        <div className="Kanban-body">
          <Queue cards={ this.state.cards } />
          <Progress />
          <Done />
        </div>
      </div>
    );
  }
}

export default Kanban;
