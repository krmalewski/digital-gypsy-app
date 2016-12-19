import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import './index.css';

// mount our App at #root-container
ReactDOM.render(
  <App />,
  document.querySelector('#root-container'),
);
