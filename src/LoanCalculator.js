/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectAmount, selectTerm } from './actions';
import Input from './components/Input';

let LoanCalculator = ({
  amountInterval,
  termInterval,
  amount,
  term,
  totalCostOfCredit,
  totalRepayableAmount,
  monthlyPayment,
  onAmountChange,
  onTermChange,
  isFetchingConstraints,
  isFetchingOffer
}) => (
  <View style={{ paddingTop: 30 }}>
    {!isFetchingConstraints ? (
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
    {!isFetchingOffer ? (
      <View>
        <Text>Total cost of credit: {totalCostOfCredit}</Text>
        <Text>Total repayable amount: {totalRepayableAmount}</Text>
        <Text>Monthly payment: {monthlyPayment}</Text>
      </View>
    ) : (
      <View>
        <Text>Fetching offer...</Text>
      </View>
    )}
  </View>
);

LoanCalculator.propTypes = {
  amountInterval: PropTypes.object,
  termInterval: PropTypes.object,
  amount: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
  totalCostOfCredit: PropTypes.number.isRequired,
  totalRepayableAmount: PropTypes.number.isRequired,
  monthlyPayment: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onTermChange: PropTypes.func.isRequired,
  isFetchingConstraints: PropTypes.bool.isRequired,
  isFetchingOffer: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAmountChange: amount => dispatch(selectAmount(amount)),
    onTermChange: term => dispatch(selectTerm(term))
  };
};

LoanCalculator = connect(mapStateToProps, mapDispatchToProps)(LoanCalculator);

export default LoanCalculator;
