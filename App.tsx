// ch04_2
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Cache from './src/screens/Cache';
import Memo from './src/screens/Memo';
import Fibo from './src/screens/Fibo';

const {width} = Dimensions.get('window');
const numberOfComponents = 3;

// prettier-ignore
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]}>
        <Cache />
        <Memo />
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: { flex: 1},
  contentContainerStyle: {width: width * numberOfComponents}
})
