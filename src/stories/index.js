import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../components/Input';

storiesOf('Input', module)
  .add('when fetching', () => (
    <Input
      isFetching={true}
      label="Total Amount"
      min={1}
      max={6}
      step={1}
      onChange={() => {}}
    />
  ))
  .add('when not fetching', () => (
    <Input
      isFetching={false}
      label="Total Amount"
      min={1}
      max={6}
      step={1}
      onChange={() => {}}
    />
  ));
