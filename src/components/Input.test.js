import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

enzyme.configure({ adapter: new Adapter() });

describe('Input component', () => {
  it('When not fetching renders as expected', () => {
    const wrapper = shallow(
      <Input
        isFetching={false}
        label="Total Amount"
        min={1}
        max={6}
        step={1}
        value={3}
        onChange={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('When fetching renders as expected', () => {
    const wrapper = shallow(
      <Input
        isFetching={true}
        label="Total Amount"
        min={1}
        max={6}
        step={1}
        value={3}
        onChange={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
