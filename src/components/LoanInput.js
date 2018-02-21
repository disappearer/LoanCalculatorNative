import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Input from './Input';

const LoanInput = ({
  isFetching,
  amountInterval,
  amount,
  onAmountChange,
  termInterval,
  term,
  onTermChange
}) => (
  <View>
    {!isFetching ? (
      <View>
        <Input
          label="Total Amount"
          min={amountInterval.min}
          max={amountInterval.max}
          step={amountInterval.step}
          value={amount}
          onChange={onAmountChange}
        />
        <Input
          label="Term"
          min={termInterval.min}
          max={termInterval.max}
          step={termInterval.step}
          value={term}
          onChange={onTermChange}
        />
      </View>
    ) : (
      <View>
        <Text>Fetching constraints...</Text>
      </View>
    )}
  </View>
);

LoanInput.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  amountInterval: PropTypes.object,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func.isRequired,
  termInterval: PropTypes.object,
  term: PropTypes.number,
  onTermChange: PropTypes.func.isRequired
};

export default LoanInput;
