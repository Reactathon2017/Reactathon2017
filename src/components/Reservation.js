import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';


export class Reservation extends Component {
	render() {
		return <Form />;
	}

}

export default connect(
  null,
  null
)(Reservation);