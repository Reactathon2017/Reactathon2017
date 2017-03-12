import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Button, Form, FormGroup, FormControl, InputGroup, Modal} from 'react-bootstrap'


export default class BillDetails extends Component{
  constructor(){
  	super();
  	this.state = {showModal: false,
  				  amount: '',
  				  participants: []
  				};

  }

  confirm =() =>{
  	let arr = [ ...this.state.participants, this.state.amount];
  	this.setState({ showModal: false, participants: arr, amount:'' });
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
  			<label>Original Balance   $100</label>
  			<ListGroup>
  				{this.state.participants.map(q => <ListGroupItem key={q}>{q}</ListGroupItem>)}
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