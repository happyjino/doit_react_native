// ch04_5
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/screens/MainNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeAreaView]}>
        <MainNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
});
