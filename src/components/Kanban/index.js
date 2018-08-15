import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Kanban.css';

class Kanban extends Component {
  render() {
    return (
      <div className="Kanban">
        <header className="Kanban-header">
          <img src={logo} className="Kanban-logo" alt="logo" />
          <h1 className="Kanban-title">Welcome to React</h1>
        </header>
        <p className="Kanban-intro">
          To get started, edit <code>src/Kanban.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Kanban;
