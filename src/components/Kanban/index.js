import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Kanban.css';

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
          <div className="queque">
            <p>IN QUEQUE</p>
          </div>
          <div className="progress">
            <p>IN PROGRESS</p>
          </div>
          <div className="done">
          <p>DONE</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Kanban;
