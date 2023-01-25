import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {MD2Colors} from 'react-native-paper';
import * as D from '../data';

const title = 'Content';
const avatars = D.makeArray(200).map(notUsed => D.randomAvatarUrl());
export default function Content() {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{uri: avatarUrl}} />
    </View>
  ));

  return (
    <ScrollView contentContainerStyle={[styles.view]}>
      {
        children
        /* <Text style={[styles.text]}>{title}</Text>
      <View style={[{flex: 1, backgroundColor: MD2Colors.red500}]}>
        <Text> flex: 0 </Text>
      </View>
      <View style={[{flex: 1, backgroundColor: MD2Colors.green500}]}>
        <Text> flex: 1 </Text>
      </View>
      <View style={[{flex: 1, backgroundColor: MD2Colors.purple500}]}>
        <Text> flex: 2 </Text>
      </View> */
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    // padding: 5,
    // backgroundColor: MD2Colors.blue900,
    // // flex: 1,
    // height: '87%',
    flexDirection: 'row',
    // overflow: 'hidden',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // flex: 1,
    padding: 5,
  },
  text: {fontSize: 20},
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 25},
});
