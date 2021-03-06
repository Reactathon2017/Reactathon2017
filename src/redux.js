import database from './database';

const types = {
	UPDATE_AMOUNT: 'UPDATE_AMOUNT',
	SET_RESERVATION_ID: 'SET_RESERVATION_ID',
	FETCH_BALANCE: 'FETCH_BALANCE',
	UPDATE_BALANCE: 'UPDATE_BALANCE',
	FETCH_BALANCE_ERROR: 'FETCH_BALANCE_ERROR',
	ADD_PAYMENT: 'ADD_PAYMENT',
	ADD_PAYMENT_OK: 'ADD_PAYMENT_OK',
	ADD_PAYMENT_ERROR: 'ADD_PAYMENT_ERROR',
	PAYMENT_ADDED: 'PAYMENT_ADDED',
	TRIGGER_MODAL: 'TRIGGER_MODAL',
	SET_PAYMENT: 'SET_PAYMENT'
};

const initialState = {
	reservationId: 0,
	amount: '',
	originalBalance: 0,
	remainingBalance: 0,
	payments: [],
	showModal: false,
	paymentChoice: ''
};

export const triggerModal = (show) => {
  return {
    type: types.TRIGGER_MODAL,
    payload: show
  };
};

export const setPayment = (payment) => {
  return {
    type: types.SET_PAYMENT,
    payload: payment
  };
};

export const updateAmount = (amount) => {
  return {
    type: types.UPDATE_AMOUNT,
    payload: amount
  };
};

export const fetchBalance = (id) => {
	return (dispatch) => {
		dispatch({ type: types.FETCH_BALANCE });
		return database.ref('/reservations_total').once('value', snap => {
			const totalBalance = snap.val()[id];
			dispatch(updateBalance(totalBalance))
		})
		.catch((error) => {
			console.log(error);
			dispatch({ type: types.FETCH_BALANCE_ERROR });
		});
	};
};

export const updateBalance = balance => {
	return {
		type: types.UPDATE_BALANCE,
		payload: balance
	};
};

export const setReservationId = id => {
	return {
		type: types.SET_RESERVATION_ID,
		payload: id
	}
}

const namesPool = ['Drake', 'Ariana', 'Lorraine', 'Diana', 'Joseph', 'Diego', 'Andres', 'Berkeley', 'Ben', 'Raj', 'David'];

export const addPayment = (amount) => {
	return (dispatch, getState) => {
		if(amount.length > 0) {
			dispatch({ type: types.ADD_PAYMENT });
			const name = namesPool[Math.floor(Math.random()*namesPool.length)];
			const timestamp = new Date().getUTCMilliseconds();
			const reservationsRef = database.ref('/reservations/' + getState().reservationId);
			const newPayment = { 
				id: timestamp,
				name: name,
				amount: amount
			};
			reservationsRef.push(newPayment)
			.then(() => {
				dispatch({ type: types.ADD_PAYMENT_OK, payload: newPayment });
			})
			.catch((error) => {
				dispatch({ type: types.ADD_PAYMENT_ERROR });
			});
		}
	}
}

export const watchPaymentAddedEvent = (reservationId) => {
  // database.ref('/reservations/' + reservationId)
  // .on('child_added', (snap) => {
  //   dispatch(getPaymentAddedAction(snap.val()));
  // });
 	return (dispatch) => {
 		//const reservationId = getState().reservationId;
		database.ref('/reservations/' + reservationId)
		.on('child_added', (snap) => {
			dispatch(getPaymentAddedAction(snap.val()));
		});
	};
}

export const getPaymentAddedAction = (payment) => {
	return {
		type: types.PAYMENT_ADDED,
		payload: payment
	};
}

//REDUCER FUNCTION
export default (state = initialState, action) => {
	if(action.type === types.TRIGGER_MODAL) {
		return {
			...state,
			showModal: action.payload
		};
	}
	if(action.type === types.SET_PAYMENT) {
		return {
			...state,
			paymentChoice: action.payload
		}
	}
	if(action.type === types.SET_RESERVATION_ID) {
		return {
			...state,
			reservationId: action.payload
		}
	}
	if (action.type === types.UPDATE_AMOUNT) {
		return {
			...state,
			amount: action.payload || ''
		};
	}
	if (action.type === types.UPDATE_BALANCE) {
		return {
			...state,
			originalBalance: action.payload || state.originalBalance,
			remainingBalance: state.remainingBalance + action.payload
		};
	}
	if (action.type === types.ADD_PAYMENT_OK) {

	}
	if (action.type === types.PAYMENT_ADDED) {

		const newState = Object.assign({}, state);
		newState.payments = [ ...state.payments, action.payload ];
		newState.amount = '';
		newState.remainingBalance = state.remainingBalance - action.payload.amount;
		return newState;
	}
	return state;
};