import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// prettier-ignore
const iconSize = 30, iconColor = 'white';
// prettier-ignore
const icons = ['home', 'table-search', 'account-settings',];
export default function BottomBar() {
  const children = icons.map(name => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
  ));

  return <View style={[styles.view]}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: MD2Colors.lightBlue500,
  },
});
