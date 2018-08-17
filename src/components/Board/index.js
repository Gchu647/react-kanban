import React from 'react';
import Column from '../Column';
import './Board.css'

const Board = props => {
  console.log("Board props: ", props);  

  return (
    <div className="Kanban-board">
    <Column 
      cards={[]} //this.props.cards
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
  )
}

export default Board;