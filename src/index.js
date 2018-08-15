import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kanban from './components/Kanban';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Kanban />, document.getElementById('root'));
registerServiceWorker();
