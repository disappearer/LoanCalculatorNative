import React from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { Slider, View, Picker, Text } from 'react-native';

const Input = ({ label, min, max, step, value, onChange }) => (
  <View>
    <Text style={{ color: 'green' }}>{label}</Text>
    <Slider
      type="range"
      minimumValue={min}
      maximumValue={max}
      step={step}
      value={value}
      onValueChange={onChange}
    />
    <Picker selectedValue={value} onValueChange={onChange}>
      {_.range(min, max + 1, step).map(itemValue => (
        <Picker.Item
          key={itemValue}
          value={itemValue}
          label={itemValue.toString()}
        />
      ))}
    </Picker>
  </View>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
