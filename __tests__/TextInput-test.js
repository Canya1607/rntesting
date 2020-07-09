// __tests__/TextInput-test.js
import 'react-native';
import React from 'react';
import TextInput from '../components/TextInput';
import {shallow, mount, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

it('renders correctly', () => {
  //
  const textinput = shallow(<TextInput value="1"/>);
  expect(textinput).toMatchSnapshot();
  //
  textinput.setProps({value: "2"});
  textinput.simulate('onChangeText')
  expect(textinput).toMatchSnapshot();
  //
  textinput.setProps({value: "s"});
  expect(textinput).toMatchSnapshot();
  //
  textinput.setProps({value: "a"});
  expect(textinput).toMatchSnapshot();
  //
  
});

it('should render correctly', () => {
  const rendered = renderer.create(<TextInput />).toJSON();
  expect(rendered).toBeTruthy();
})

it.only('should render Input', () => {
  const wrapper = shallow(<TextInput />);
  expect(wrapper.find('View')).toHaveLength(1);
  // expect().toHaveLength(1);
  console.log(wrapper.getElement('Input'));
})
