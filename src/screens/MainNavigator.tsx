import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from './Login'
import SignUp from './SignUp'
import TabNavigator from './TabNavigator'
import DrawerContent from './DrawerContent'
const Drawer = createDrawerNavigator()

export default function CopyMe() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent} screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{ title: 'Home' }} />
    </Drawer.Navigator>
  );
}

