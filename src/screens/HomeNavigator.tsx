import React, { useMemo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import type { StackNavigationOptions } from '@react-navigation/stack'

import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import { useNavigationHorizontalInterpolator } from '../hooks'

const Stack = createStackNavigator()

export default function MainNavigator() {

  const interpolator = useNavigationHorizontalInterpolator()
  const leftOptions = useMemo<StackNavigationOptions>(() => ({
    gestureDirection: 'horizontal-inverted',
    cardStyleInterpolator: interpolator
  }), [])

  const rightOptions = useMemo<StackNavigationOptions>(() => ({
    gestureDirection: 'horizontal',
    cardStyleInterpolator: interpolator
  }), [])

  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: MD2Colors.pink500
        // },
        // headerTintColor: 'white',
        // headerTitleStyle: {
        //   fontWeight: 'bold'
        // },
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLeft" component={HomeLeft} options={leftOptions} />
      <Stack.Screen name="HomeRight" component={HomeRight} options={rightOptions} />
    </Stack.Navigator>
  )
}