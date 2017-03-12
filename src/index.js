
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-intl/dist/react-intl.min.js';


import { createElement } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './redux.js';
import { render } from 'react-dom';
import { Router, browserHistory as history } from 'react-router';

import {IntlProvider} from 'react-intl';

import './index.css';
import routes from './routes.jsx';

const devToolStoreEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__() ||
  ((x) => x);

const logger = createLogger();

const middlewareStoreEnhancer = applyMiddleware(
  thunkMiddleware,
  logger
);

const store = createStore(
  reducer,
  compose(middlewareStoreEnhancer, devToolStoreEnhancer)
);

ReactDOM.render(
  //<App />,
  createElement(
      IntlProvider,
      { locale:"en" },
      createElement(
      	Provider,
    	{ store: store },
    	createElement(Router, { routes, history })
    	)
  ),
  document.getElementById('root')
);
