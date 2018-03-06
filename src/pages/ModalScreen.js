import React from 'react';
import { View, Text, Button } from 'react-native';
import { translate } from 'react-i18next';

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

  export default translate('modal')(ModalScreen);