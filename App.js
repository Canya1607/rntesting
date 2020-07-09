import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, AsyncStorage, Alert} from 'react-native';
// Components
import TextInput from './components/TextInput';

const App = () => {
  const [itemFromAS, setItemFromAS] = useState('');
  const [inputKey, setInputKey] = useState('');

  const setItemInAS = async (key, value) => {
    if (key) {
      console.log('setItemInAS: start process...');
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('setItemInAS: finish process!');
    } else {
      Alert.alert('Error', 'Key can`t be empty!')
    }
  };

  const getItemFromAS = async (key) => {
    console.log('getItemFromAS: start process...');
    const value = await AsyncStorage.getItem(key);
    console.log('getItemFromAS: finish process!');
    return value;
  };

  const showTestData = (key) => {
    getItemFromAS(key).then((data) => setItemFromAS(JSON.parse(data)));
  };

  const handleInputKey = (text) => {
    setInputKey(text);
  }

  return (
    <View style={styles.screen}>
      <Text>testrnfeatures</Text>
      <TextInput value={inputKey} onChangeText={handleInputKey} />
      <View style={styles.button}>
        <Button
          title="addtestdatabtn"
          onPress={() => setItemInAS(inputKey, 'testvalue')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="showtestdatabtn"
          onPress={() => showTestData('testkey')}
        />
      </View>
      <Text>{itemFromAS}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
  },
});

export default App;
