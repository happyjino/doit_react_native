import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Switch, useTheme } from 'react-native-paper';
import { useToggleTheme } from '../contexts';

export default function Home() {
  const {dark, colors, fonts} = useTheme();
  const toggleTheme = useToggleTheme();
  
  return (
    <View style={[styles.view, { backgroundColor: colors.background }]}>
      <View style={[styles.bar, { backgroundColor: colors.primary }]}>
        <Text style={[styles.text, { color: colors.onSurface, fontWeight: '500' }]}>
          TopBar
        </Text>
        <View style={[{ flex: 1 }]} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, { color: colors.onSurface, fontWeight: '500' }]}>
          Welcome to Context world!
        </Text>
      </View>
      <View style={[styles.bar, { backgroundColor: colors.secondary }]}>
        <Text style={[styles.text, { color: colors.onSurface, fontWeight: '500' }]}>
          BottomBar
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: { flex: 1 },
  bar: { height: 50, flexDirection: 'row', padding: 5, alignItems: 'center' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: {fontSize: 20, textAlign: 'center'},
});
