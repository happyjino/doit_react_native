// ch06_2
import React, {useState, useCallback} from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';
import MainNavigator from './src/screens/MainNavigator';
import { ToggleThemeProvider } from './src/contexts';

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme == 'dark' ? MD3DarkTheme : DefaultTheme)
  const toggleTheme = useCallback(() => setTheme((theme) => (theme.dark ? DefaultTheme : MD3DarkTheme)), [])
  
  return (
    <PaperProvider theme={theme}>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaView style={styles.safeAreaView}>
          <MainNavigator />
        </SafeAreaView>
      </ToggleThemeProvider>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
});
