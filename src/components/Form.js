import React, { Component } from 'react';
import { 
	Button,
	Col, 
	ControlLabel,
	Form, 
	FormControl,
	FormGroup,
	MenuItem,
	SplitButton 
} from 'react-bootstrap';

export default class FormInput extends Component {

	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			paymentChoice: ''
		}
	}

	onFirstNameChange = (event) => {
		console.log('event = ', event)
		event.preventDefault();
		this.setState({ firstName: event.target.value })
	}

	onButtonSelect = (event) => {
		console.log('event =', event);
		console.log('this.state =', this.state);
	}

	onPaymentChoice = (event) => {
		console.log('event =', event.target.value);
		this.setState({ paymentChoice: event.target.value});

	}


	render() {

		return (
			<div>
				<h3>Dinner Details</h3>
				<Form horizontal>
					<FormGroup>
						<Col componentClass={ControlLabel} sm={2}>
						  First Name
					    </Col>
			  			<Col sm={10}>
			  				<FormControl 
			  					type="text" 
			  					placeholder="First Name"
			  					value={this.state.firstName}
			  					onChange={this.onFirstNameChange}
		  					/>
		  				</Col>
	  				</FormGroup>
	  				<FormGroup>
		  				<Col componentClass={ControlLabel} sm={2}>
						  Last Name
					  	</Col>
			  			<Col sm={10}>
			  				<FormControl type="text" placeholder="Last Name" />
		  				</Col>
	  				</FormGroup>
	  				<FormGroup controlId="formgroup">
						<Col componentClass={ControlLabel} sm={2}>
						  Phone
					  	</Col>
			  			<Col sm={10}>
			  				<FormControl type="text" placeholder="Phone" />
		  				</Col>
	  				</FormGroup>
  					<FormGroup controlId="formgroup">
						<Col componentClass={ControlLabel} sm={2}>
						  Email
					  	</Col>
			  			<Col sm={10}>
			  				<FormControl type="email" placeholder="Email" />
		  				</Col>
	  				</FormGroup>
  				</Form>
  				<div>
	  				<SplitButton title="Payment Options" 
	  							 pullRight id="split-button-pull-right"
					 			 value={ this.state.paymentChoice }
					 			 onChange={ this.onPaymentChoice }>
						<MenuItem eventKey="1">Individual (Dutch)</MenuItem>
						<MenuItem eventKey="2">You're On The Hook (100%)</MenuItem>
						<MenuItem eventKey="3">Split Evenly</MenuItem>
						<MenuItem eventKey="4">Split Appetizers Only</MenuItem>
					</SplitButton>
				</div>
				<div>
					<Button bsStyle="primary"
							onSelect={ this.onButtonSelect }
					>Submit</Button>
				</div>	
			</div>
		)
	}
}