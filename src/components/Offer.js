import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

let Offer = ({
  isFetching,
  totalCostOfCredit,
  totalRepayableAmount,
  monthlyPayment,
  t
}) => (
  <View style={{ flex: 2 }}>
    {!isFetching ? (
      <View>
        <Text>
          {t('creditCost')}: {totalCostOfCredit}
        </Text>
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

const mapStateToProps = state => ({
  isFetching: state.isFetchingOffer,
  totalCostOfCredit: state.totalCostOfCredit,
  totalRepayableAmount: state.totalRepayableAmount,
  monthlyPayment: state.monthlyPayment
});

Offer = connect(mapStateToProps)(translate('offer')(Offer));

export default Offer;
