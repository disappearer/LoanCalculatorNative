import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Offer = ({
  isFetching,
  totalCostOfCredit,
  totalRepayableAmount,
  monthlyPayment
}) => (
  <View>
    {!isFetching ? (
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

Offer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  totalCostOfCredit: PropTypes.number,
  totalRepayableAmount: PropTypes.number,
  monthlyPayment: PropTypes.number
};

export default Offer;