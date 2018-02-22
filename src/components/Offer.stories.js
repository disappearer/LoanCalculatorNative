import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Offer from './Offer';

const offerResponse = {
  totalCostOfCredit: 40,
  totalRepayableAmount: 480,
  monthlyPayment: 32
};

storiesOf('Offer', module)
  .add('when not fetching', () => {
    const store = configureStore(undefined);
    store.dispatch({ type: 'FETCH_OFFER_SUCCESS', offer: offerResponse });
    return (
      <Provider store={store}>
        <Offer />
      </Provider>
    );
  })
  .add('when fetching', () => {
    const store = configureStore(undefined);
    store.dispatch({ type: 'FETCH_OFFER_REQUEST' });
    return (
      <Provider store={store}>
        <Offer />
      </Provider>
    );
  });
