// ch03_4

import React from 'react';
// prettier-ignore
import { SafeAreaView, StyleSheet, View, Alert, Platform } from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TopBar from './src/screens/TopBar';
import Content from './src/screens/Content';
import BottomBar from './src/screens/BottomBar';

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <TopBar />
      <Content />
      <BottomBar />
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={50} color="white" />
      </View>
    </SafeAreaView>
  );
}

// prettier-ignore
const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: MD2Colors.lightBlue100 },
  absoluteView: {
    backgroundColor: MD2Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ ios: 100, android: 80 }),
    padding: 10,
    borderRadius: 35
  }
});
