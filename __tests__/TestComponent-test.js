/**
 * @jest-environment jsdom
 */

import 'react-native';
import React from 'react';
import TestComponent from '../components/TestComponent';
import {shallow, mount, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

it('test component finding (static)', () => {
  const wrapper = shallow(<TestComponent text={'123'} />);
  expect(wrapper.find('View')).toHaveLength(1);
  expect(wrapper.find('Text')).toHaveLength(1);
  expect(wrapper.instance().props.text).toEqual('123');
  // console.log(wrapper.props());
  // console.log(wrapper.instance().props); // Working
})

it('test component events (behavior)', () => {
  const instanceOf = renderer.create(<TestComponent text={'aaa'} />).getInstance();
  expect(instanceOf).toBeTruthy();
  instanceOf.setNewText('mynewtext');
  expect(instanceOf.state.newText).toEqual('mynewtext');
  instanceOf.setState({newText: 'othertext'});
  expect(instanceOf.state.newText).toEqual('othertext');
  // console.log(instanceOf);
  expect(instanceOf.props.text).toEqual('aaa');
});

describe('test component events - mount (behavior)', () => {
  const container = mount(<TestComponent text={'test'} />);

  it('should work', () => {
    expect(container.instance().state.input).toEqual('');
    container.find('TextInput').props().onChangeText('2');
    expect(container.instance().state.input).toEqual('2');
  })
});