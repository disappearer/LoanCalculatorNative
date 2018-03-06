import React, { Component } from 'react';
import { Text, ScrollView, Button, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { withNavigation } from 'react-navigation';
import { translate } from 'react-i18next';
import { selectAmount, selectTerm } from '../actions';
import LoanInput from '../components/LoanInput';
import Offer from '../components/Offer';

class LoanCalculatorScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      headerTitle: () => (
        <View>
          <Text>{screenProps.t('loan:title')}</Text>
        </View>
      ),
      headerRight: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Modal"
          color="blue"
        />
      )
    };
  };

  render() {
    const { input, navigation, i18n, t } = this.props;
    const { navigate } = navigation;
    return (
      <ScrollView>
        <LoanInput {...input} />
        <Offer />
        <Button
          onPress={() => navigate('Other', { a: 'aaa', b: 'bbb' })}
          title="Other Page"
        />
        <Button
          onPress={() => {
            i18n.changeLanguage('en');
          }}
          title={t('common:actions.toggleToEnglish')}
        />
        <Button
          onPress={() => {
            i18n.changeLanguage('sr');
          }}
          title={t('common:actions.toggleToSerbian')}
        />
      </ScrollView>
    );
  }
}

LoanCalculatorScreen.propTypes = {
  input: PropTypes.shape({
    isFetchingConstraints: PropTypes.bool.isRequired,
    amountInterval: PropTypes.object,
    termInterval: PropTypes.object,
    amount: PropTypes.number,
    term: PropTypes.number,
    onAmountChange: PropTypes.func.isRequired,
    onTermChange: PropTypes.func.isRequired
  }),
  navigation: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  withNavigation(translate('common')(LoanCalculatorScreen))
);
