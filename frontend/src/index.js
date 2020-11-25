import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faUser,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare,faCoffee,faUser,faExclamationTriangle)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

