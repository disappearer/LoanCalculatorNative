import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { root } from './sagas';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import { translate, I18nextProvider } from 'react-i18next';
import i18n from './i18next/i18n';
import LoanCalculator from './LoanCalculator';
import OtherPage from './OtherPage';

const store = configureStore(undefined);
store.runSaga(root);

class ModalScreen extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>{t('description')}</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const Stack = StackNavigator({
  Loan: { screen: LoanCalculator },
  Other: { screen: OtherPage }
});

const RootStack = StackNavigator(
  {
    Main: {
      screen: Stack
    },
    MyModal: {
      screen: translate('modal')(ModalScreen)
    }
  },
  {
    mode: 'card',
    headerMode: 'none'
  }
);
const WrappedRootStack = () => (
  <RootStack screenProps={{ t: i18n.getFixedT() }} />
);
const TranslatedRootStack = translate()(WrappedRootStack);

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <TranslatedRootStack />
    </Provider>
  </I18nextProvider>
);

export default App;
