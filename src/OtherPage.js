import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class OtherPage extends Component {
  static navigationOptions = {
    headerTitle: 'Other Page'
  };
  render() {
    const { params } = this.props.navigation.state;
    const a = params ? params.a : null;
    const b = params ? params.b : null;
    return (
      <View>
        <Text>
          This is another page. a: {JSON.stringify(a)}, b: {JSON.stringify(b)}
        </Text>
      </View>
    );
  }
}
