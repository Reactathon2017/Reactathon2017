import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BillDetails from './BillDetails.js'

import Form from './components/Form';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form />
        <BillDetails />
      </div>
    );
  }
}

export default App;
