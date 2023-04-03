import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Button } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import { useToggle, useTimeout } from '../hooks'

export default function Timer() {
  const [loading, toggleLoading] = useToggle(true);
  useTimeout(() => loading && toggleLoading(), 3000, [loading])

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button onPress={toggleLoading} title={loading ? 'stop loading' : 'start loading'} />
      {loading && (
        <ActivityIndicator size="large" color={MD2Colors.deepPurple700} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', backgroundColor: MD2Colors.yellow300 },
  title: { fontSize: 30, fontWeight: '600' },
})