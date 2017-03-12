import React from 'react';

import { Route, IndexRoute } from 'react-router';


import App from './App.js';
import Reservation from './components/Reservation.js';
import BillDetails from './BillDetails.js';

export default (
  <Route
    component={ App }
    path='/'
    >

    <Route
      component={ BillDetails }
      path='billdetails'
    />
    <IndexRoute component={ Reservation } />

  </Route>
);