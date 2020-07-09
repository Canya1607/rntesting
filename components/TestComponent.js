import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

class TestComponent extends React.Component {
  state = {
    newText: '',
    input: ''
  };

  setNewText = (text) => {
    this.setState({newText: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.input} onChangeText={(text) => this.setState({input: text})} />
        <Text onPress={() => setNewText('mynewtext')}>
          {this.state.newText || this.props.text}
        </Text>
      </View>
    );
  }
}

TestComponent.propTypes = {
  text: propTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: '#00220120',
  },
});

export default TestComponent;
