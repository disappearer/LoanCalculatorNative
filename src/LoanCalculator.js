import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { selectAmount, selectTerm } from './actions';
import LoanInput from './components/LoanInput';
import Offer from './components/Offer';

let LoanCalculator = ({ input }) => (
  <View style={{ paddingTop: 30 }}>
    <LoanInput {...input} />
    <Offer />
  </View>
);

LoanCalculator.propTypes = {
  input: PropTypes.shape({
    isFetchingConstraints: PropTypes.bool.isRequired,
    amountInterval: PropTypes.object,
    termInterval: PropTypes.object,
    amount: PropTypes.number,
    term: PropTypes.number,
    onAmountChange: PropTypes.func.isRequired,
    onTermChange: PropTypes.func.isRequired
  }),
  offer: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    totalCostOfCredit: PropTypes.number,
    totalRepayableAmount: PropTypes.number,
    monthlyPayment: PropTypes.number
  })
};

const mapStateToProps = state => {
  return {
    input: {
      isFetchingConstraints: state.isFetchingConstraints,
      amountInterval: state.amountInterval,
      termInterval: state.termInterval,
      amount: state.amount,
      term: state.term
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    input: {
      onAmountChange: amount => dispatch(selectAmount(amount)),
      onTermChange: term => dispatch(selectTerm(term))
    }
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return _.merge({}, stateProps, dispatchProps);
};

LoanCalculator = connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  LoanCalculator
);

export default LoanCalculator;
