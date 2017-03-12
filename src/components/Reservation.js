import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';

function mapStateToProps(state) {
  return {
 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // //watchPaymentAddedEvent: () => dispatch(watchPaymentAddedEvent()),
    // updateBalance: (e) => {
    //   const { value } = e.target;
    //   return dispatch(updateBalance(value));
    // }, 
    // updateAmount: (e) => {
    //   const { value } = e.target;
    //   console.log('amount value: ', value);
    //   return dispatch(updateAmount(value));
    // },
  };
};

export class Reservation extends Component {
	render() {
		return <Form />;
	}

}

export default connect(
  null,
  null
)(Reservation);