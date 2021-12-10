import React, { Component } from 'react';
import { render } from 'react-dom';
import './counter/style.css';

// Components
import Counter from './counter/Counter.jsx';

const App = () => (
  <div className="wrapper">
    <Counter />
  </div>
);

render(<App />, document.getElementById('react-counter-app'));