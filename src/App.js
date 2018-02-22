import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { root } from './sagas';
import LoanCalculator from './LoanCalculator';

const store = configureStore(undefined);
store.runSaga(root);

const App = () => (
  <Provider store={store}>
    <LoanCalculator />
  </Provider>
);

export default App;
