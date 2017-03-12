import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getQueryStringParams } from './utils.js';
import BillDetails from './BillDetails.js'

import Form from './components/Form';

import {
  setReservationId,
  fetchBalance,
  watchPaymentAddedEvent
} from './redux.js';

const mapDispatchToProps = dispatch => {
  return {
    setReservationId: (reservationId) => {
      dispatch(watchPaymentAddedEvent(reservationId));
      return dispatch(setReservationId(reservationId))
    },
    fetchBalance: (reservationId) => dispatch(fetchBalance(reservationId))
  };
};

export class App extends Component {
  componentDidMount() {

    const reservationId = getQueryStringParams('reservationId');
    
    if(reservationId) {
      this.props.setReservationId(reservationId);
      this.props.fetchBalance(reservationId);
    }
    else 
      this.props.fetchBalance('1');
  }
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

export default connect(
  null,
  mapDispatchToProps
)(App);