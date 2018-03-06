import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { root } from './sagas';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import { translate, I18nextProvider } from 'react-i18next';
import i18n from './i18next/i18n';
import LoanCalculatorScreen from './pages/LoanCalculatorScreen';
import OtherPageScreen from './pages/OtherPageScreen';
import ModalScreen from './pages/ModalScreen';

const store = configureStore(undefined);
store.runSaga(root);

const MainStack = StackNavigator({
  Loan: { screen: LoanCalculatorScreen },
  Other: { screen: OtherPageScreen }
});

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: ModalScreen
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
