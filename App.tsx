// ch02_4

import React from 'react';
import {SafeAreaView, Button, Alert, TextInput} from 'react-native';
import {TouchableOpacity, TouchableHighlight, Text} from 'react-native';

const onPress = () => Alert.alert('home pressed.', 'message');

export default function App() {
  return (
    <SafeAreaView>
      <Button
        title="home1"
        color="blue"
        onPress={() => console.log('home pressed.')}
      />
      <Button
        title="home2"
        color="red"
        onPress={() => Alert.alert('home pressed.', 'message')}
      />
      <Button title="home3" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <Text onPress={onPress}>Press Me</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  );
}
