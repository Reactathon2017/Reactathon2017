import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getQueryStringParams } from './utils.js';
import BillDetails from './BillDetails.js'
import RestaurantProfile from './components/RestaurantProfile.js';

import { createElement } from 'react';

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
    const bio = {
      avatar_url: 'https://resizer.otstatic.com/v1/fDzI465IL8%2B687zSupRS4Q/24900953.jpg', 
      name: 'Ohio'
    };
    return (
      <div className="App">
        <div className="App-header">
          <RestaurantProfile bio={ bio }/>
        </div>
        {this.props.children}
      </div>
    );
  }
}


export default connect(
  null,
  mapDispatchToProps
)(App);