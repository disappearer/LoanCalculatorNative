import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers';
import { root } from './sagas';
import LoanCalculator from './LoanCalculator';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(root);

const App = () => (
  <Provider store={store}>
    <LoanCalculator />
  </Provider>
);

export default App;
