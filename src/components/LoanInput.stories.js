import React from 'react';
import { storiesOf } from '@storybook/react-native';
import LoanInput from './LoanInput';

const constraintsResponse = {
  amountInterval: { min: 10, max: 2000, step: 10, defaultValue: 400 },
  termInterval: { min: 3, max: 30, step: 1, defaultValue: 15 }
};

storiesOf('LoanInput', module)
  .add('when not fetching', () => (
    <LoanInput
      isFetchingConstraints={false}
      {...constraintsResponse}
      amount={400}
      term={15}
      onAmountChange={amount => console.log(amount)}
      onTermChange={term => console.log(term)}
    />
  ))
  .add('when fetching', () => (
    <LoanInput
      isFetchingConstraints={true}
      {...constraintsResponse}
      amount={400}
      term={15}
      onAmountChange={amount => console.log(amount)}
      onTermChange={term => console.log(term)}
    />
  ));
