import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FormattedNumber } from 'react-intl'
import { ListGroup, ListGroupItem, Button, Form, FormGroup, 
          FormControl, InputGroup, Modal, PageHeader, Grid, Row, Col
       } from 'react-bootstrap'
import { updateBalance, addPayment, updateAmount } from './redux.js';

function mapStateToProps(state) {
  return {
    originalBalance: state.originalBalance,
    remainingBalance: state.remainingBalance,
    payments: state.payments,
    amount: state.amount
  };
}

const mapDispatchToProps = dispatch => {
  return {
    //watchPaymentAddedEvent: () => dispatch(watchPaymentAddedEvent()),
    updateBalance: (e) => {
      const { value } = e.target;
      return dispatch(updateBalance(value));
    }, 
    addPayment: (amount) => dispatch(addPayment(amount)),
    updateAmount: (e) => {
      const { value } = e.target;
      console.log('amount value: ', value);
      return dispatch(updateAmount(value));
    },
  };
};


export class BillDetails extends Component{
  constructor(){
  	super();
  	this.state = {showModal: false
  				};

  }
  componentDidMount() {
      
  };
  confirm = () =>{
  	// let arr = [ ...this.state.participants, this.state.amount];
  	// this.setState({ showModal: false, participants: arr, amount:'' });
    this.props.addPayment(this.props.amount);
    this.setState({ showModal: false, amount:'' })
  }
   
  close =() => {
    this.setState({ showModal: false, amount:'' })
  }

  open =() => {  	
   	this.setState({ showModal: true });   	 
  }

  // handleAmountChange =(event) =>{
  // 	event.preventDefault();
  // 	this.setState({ amount: event.target.value });
  // }
 


  render(){
  	return (  		
  		<div>
  			<PageHeader>Bill Details</PageHeader>            
            <Grid>
                <Row>
                  <Col md={6} mdOffset={3}>
                      <Col sm={6}>
                			 <label>Total Bill: </label>
                			</Col>
                      <Col sm={6}>
                        <label>Remaining Balance: </label>
                      </Col>
                  </Col>
                  <Col sm={6} smOffset={3}>
                      <Col sm={6}>
                        <label>  
                          <FormattedNumber 
                              value={this.props.originalBalance} 
                              style="currency" 
                              currency="USD" 
                          /> 
                        </label>
                      </Col>
                      <Col sm={6}>
                        <label>  
                          <FormattedNumber 
                              value={this.props.remainingBalance} 
                              style="currency" 
                              currency="USD" 
                          /> 
                        </label>
                      </Col>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col md={6} mdOffset={3}>
                    <Col sm={6} smOffset={3} >
              				<InputGroup>
                				<InputGroup.Addon>$</InputGroup.Addon>
                				<FormControl 
                            type="number" 
                            value={this.props.amount} 
                            onChange={ this.props.updateAmount }   
                        />
                        <InputGroup.Button>
                          <Button 
                              bsStyle="primary"  
                              onClick={this.open}>Pay
                          </Button>
                        </InputGroup.Button>     				
              				</InputGroup>
                    </Col>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6} mdOffset={3}>

                      <label>Payments Made: </label>

                      <ListGroup>
                       {this.props.payments.map(p => <ListGroupItem key={p.id}>
                          {p.name} - <FormattedNumber value={p.amount} style="currency" currency="USD" />
                          </ListGroupItem>)}
                      </ListGroup>  

                  		<Modal show={this.state.showModal} onHide={this.close} bsSize="small" aria-labelledby="contained-modal-title-sm">
                  			<Modal.Body>
                      			<h4>Confirm the payment: <FormattedNumber value={this.props.amount} style="currency" currency="USD" /></h4>
                      	    </Modal.Body>
                      	    <Modal.Footer>
                  				<Button bsStyle="primary" onClick={this.confirm}>OK</Button>
                  				<Button bsStyle="primary" onClick={this.close}>Cancel</Button>
                				</Modal.Footer>
                  		</Modal>
                  </Col>
                </Row>
            </Grid>
  		</div>
  	)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillDetails);