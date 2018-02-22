import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Input from './Input';

storiesOf('General', module).add('Input', () => (
  <Input
    label="Total Amount"
    min={1}
    max={6}
    step={1}
    value={3}
    onChange={() => {}}
  />
));
