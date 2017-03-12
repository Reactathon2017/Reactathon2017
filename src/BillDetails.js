import React, {Component} from 'react';
import { connect } from 'react-redux';
import {ListGroup, ListGroupItem, Button, Form, FormGroup, FormControl, InputGroup, Modal} from 'react-bootstrap'
import { updateBalance, addPayment } from './redux.js';

function mapStateToProps(state) {
  return {
    totalBalance: state.totalBalance,
    payments: state.payments
  };
}

const mapDispatchToProps = dispatch => {
  return {
    //watchPaymentAddedEvent: () => dispatch(watchPaymentAddedEvent()),
    updateBalance: (e) => {
      const { value } = e.target;
      return dispatch(updateBalance(value));
    }, 
    addPayment: (amount) => dispatch(addPayment(amount))
  };
};


export class BillDetails extends Component{
  constructor(){
  	super();
  	this.state = {showModal: false,
  				  amount: ''
  				};

  }
  componentDidMount() {
      
  };
  confirm = () =>{
  	// let arr = [ ...this.state.participants, this.state.amount];
  	// this.setState({ showModal: false, participants: arr, amount:'' });
    this.props.addPayment(this.state.amount);
    this.setState({ showModal: false, amount:'' })
  }
   
  close =() => {
    this.setState({ showModal: false, amount:'' })
  }

  open =() => {  	
   	this.setState({ showModal: true });   	 
  }

  handleAmountChange =(event) =>{
  	event.preventDefault();
  	this.setState({ amount: event.target.value });
  }
 


  render(){
  	return (  		
  		<div>
  			<h3>Bill Details</h3>  			
  			<label>Original Balance {this.props.totalBalance} </label>
  			<ListGroup>
  				{this.props.payments.map(p => <ListGroupItem key={p.id}>{p.name} - {p.amount}</ListGroupItem>)}
    		</ListGroup>  			
  			<Form>
            	<FormGroup>
      				<InputGroup>
        				<InputGroup.Addon>$</InputGroup.Addon>
        				<FormControl type="text" value={this.state.amount} onChange={ this.handleAmountChange }/>        				
      				</InputGroup>
    		 	</FormGroup>
  				<Button bsStyle="primary"  onClick={this.open}>Pay</Button>

        		<Modal show={this.state.showModal} onHide={this.close}>
        			<Modal.Body>
            			<h4>Do you confirm the payment {this.state.amount}?</h4>
            	    </Modal.Body>
            	    <Modal.Footer>
        				<Button bsStyle="primary" onClick={this.confirm}>OK</Button>
        				<Button bsStyle="primary" onClick={this.close}>Cancel</Button>
      				</Modal.Footer>
        		</Modal>
  			</Form>
  		</div>
  	)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillDetails);