// ch03_3

import React from 'react';
// prettier-ignore
import { SafeAreaView, StyleSheet, ImageBackground, Image, View, Text, Platform } from 'react-native';
import * as D from './src/data';

import {MD2Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;

const text = `Almost before we knew it, we had left the ground.`;

const onIconPressed = () => console.log('icon pressed');

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./src/assets/images/bg.jpg')}>
        <Image source={{uri: avatarUrl}} style={[styles.image]} />
        <View style={[styles.flex, styles.padding10]}>
          <Text style={[styles.text, styles.regular]}>{text} [regular]</Text>
          <Text style={[styles.text, styles.medium]}>{text} [medium]</Text>
          <Text style={[styles.text, styles.semiBold]}>{text} [semi bold]</Text>
          <Text style={[styles.text, styles.bold]}>{text} [bold]</Text>
        </View>
        <Icon
          name="rocket"
          size={50}
          color={MD2Colors.lightBlue500}
          onPress={onIconPressed}
        />
        <Icon
          name="home"
          size={50}
          color={MD2Colors.lightBlue500}
          onPress={onIconPressed}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

// prettier-ignore
const styles = StyleSheet.create({
  flex: {flex: 1},
  backgroundImage: {flex: 1},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
  padding10: {padding: 10},
  text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},
  regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'},
  medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'},
  semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'},
  bold: {
    fontFamily: 'DancingScript-Bold',
    fontWeight: Platform.select({ ios: '700', android: '600' })
  },
});
