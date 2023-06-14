// ch07_4
import 'react-native-gesture-handler'
import React, {useState, useCallback} from 'react';
import { enableScreens } from 'react-native-screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { ToggleThemeProvider } from './src/contexts'
import MainNavigator from './src/screens/MainNavigator';
// import { useColorScheme, AppearanceProvider } from 'react-native-appearance';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';


enableScreens()

export default function App() {
  const scheme = useTheme();
  const [theme, setTheme] = useState(
    scheme.dark ? DarkTheme : DefaultTheme
  )

  const toggleTheme = useCallback(() => 
    setTheme(({ dark }) => (dark ? DefaultTheme : DarkTheme))
  , [])
  
  return (
    <PaperProvider theme={theme}>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </PaperProvider>
    
  )
}
