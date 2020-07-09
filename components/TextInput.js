import React, { useState } from 'react';
import { View, TextInput as Input, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

const TextInput = (props) => {
  return (
    <View style={styles.container}>
      <Input style={styles.input} placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} />
    </View>
  )
}

TextInput.propTypes = {
  placeholder: propTypes.string,
  // value: propTypes.string.isRequired,
  // onChangeText: propTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    width: '60%'
  },
  input: {
    backgroundColor: '#a2a2a250',
    borderRadius: 4
  }
})

export default TextInput;
