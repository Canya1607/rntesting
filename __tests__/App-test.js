/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import TextInput from '../components/TextInput';

it('renders correctly App', () => {
  renderer.create(<App />);
});
