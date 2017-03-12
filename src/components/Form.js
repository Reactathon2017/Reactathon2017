import React, { Component } from 'react';
import { 
	Button,
	Col, 
	ControlLabel,
	Form, 
	FormControl,
	FormGroup,
	MenuItem,
	PageHeader,
	SplitButton 
} from 'react-bootstrap';

export default class FormInput extends Component {

	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			paymentChoice: ''
		}
	}

	onFirstNameChange = (event) => {
		event.preventDefault();
		this.setState({ firstName: event.target.value });
	}

	onLastNameChange = (event) => {
		event.preventDefault();
		this.setState({ lastName: event.target.value });
	}

	onPhoneChange = (event) => {
		event.preventDefault();
		this.setState({ phone: event.target.value });
	}

	onEmailChange = (event) => {
		event.preventDefault();
		this.setState({ email: event.target.value });
	}

	onPaymentSelect = (eventKey, event) => {
		this.setState({ paymentChoice: eventKey});
	}

	onPaymentChoice = () => {

		let title;
		
		if(this.state.paymentChoice === ''){

			title = 'Payment Options';

			return (
					<SplitButton title={ title }
	  							 pullRight id="split-button-pull-right"
					 			 value={ this.state.paymentChoice }
					 			 onSelect={ this.onPaymentSelect }>
						<MenuItem eventKey="1">Individual (Dutch)</MenuItem>
						<MenuItem eventKey="2">You're On The Hook (100%)</MenuItem>
						<MenuItem eventKey="3">Even Split</MenuItem>
						<MenuItem eventKey="4">Split Appetizers Only</MenuItem>
					</SplitButton>
			);
		} else {

			// console.log('this.state.paymentChoice = ', this.state.paymentChoice);

			switch(this.state.paymentChoice){

				case '1':
					title = 'Individual (Dutch)';
					break;

				case '2':
					title = 'You\'re On The Hook (100%)';
					break;

				case '3':
					title = 'Even Split';
					break;

				case '4':
					title = 'Split Appetizers Only';
					break;

				default:
					title = 'Default';
			}

			return (
					<SplitButton title={ title }
	  							 pullRight id="split-button-pull-right"
					 			 value={ this.state.paymentChoice }
					 			 onSelect={ this.onPaymentSelect }>
						<MenuItem eventKey="1">Individual (Dutch)</MenuItem>
						<MenuItem eventKey="2">You're On The Hook (100%)</MenuItem>
						<MenuItem eventKey="3">Even Split</MenuItem>
						<MenuItem eventKey="4">Split Appetizers Only</MenuItem>
					</SplitButton>
			)
		}

	}

	onButtonSelect = () => {
		console.log('select state', this.state);
	}

	render() {

		return (
			<div>
				<PageHeader>Dinner Details</PageHeader>
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
			  				<FormControl 
			  					type="text" 
			  					placeholder="Last Name"
			  					value={this.state.lastName}
			  					onChange={this.onLastNameChange}
		  					/>
		  				</Col>
	  				</FormGroup>
	  				<FormGroup controlId="formgroup">
						<Col componentClass={ControlLabel} sm={2}>
						  Phone
					  	</Col>
			  			<Col sm={10}>
			  				<FormControl 
			  					type="number" 
			  					placeholder="Phone"
			  					value={this.state.phone}
			  					onChange={this.onPhoneChange}
		  					/>
		  				</Col>
	  				</FormGroup>
  					<FormGroup controlId="formgroup">
						<Col componentClass={ControlLabel} sm={2}>
						  Email
					  	</Col>
			  			<Col sm={10}>
			  				<FormControl 
			  					type="email" 
			  					placeholder="Email"
			  					value={this.state.email}
			  					onChange={this.onEmailChange}
		  					/>
		  				</Col>
	  				</FormGroup>
  				</Form>
  				<div>
  					{this.onPaymentChoice()}
				</div>
				<br></br>
				<div>
					<Button	bsStyle="primary"
							onSelect={ this.onButtonSelect }
					>Submit</Button>
				</div>	
			</div>
		)
	}
}