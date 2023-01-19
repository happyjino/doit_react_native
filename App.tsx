// ch03_2

import React from 'react';
// prettier-ignore
import {SafeAreaView, Text,StyleSheet, Platform, Dimensions, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Color from 'color';

const {width, height} = Dimensions.get('window');

// prettier-ignore
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>

      <View style={[styles.box, {borderRadius: 10}]} />
      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 10}]} />
    </SafeAreaView>
  );
}
// prettier-ignore
const styles= StyleSheet.create({
  safeAreaView: { backgroundColor: MD2Colors.blue500, flex: 1, paddingLeft: Platform.select({ios: 0, android: 20})},
  text: { fontSize: 20, color: Color(MD2Colors.blue500).lighten(0.9).string(), marginBottom: 10, marginLeft: 50, marginTop: 20 },
  box: { height: 100, width: '70%', backgroundColor: 'white', marginBottom: 10, marginLeft: Platform.select({ ios: 20, android: 0}) },
  border: { borderWidth: 10, borderColor: MD2Colors.lime500}
});
