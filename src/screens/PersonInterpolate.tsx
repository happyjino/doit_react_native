import React, { useCallback, useState, useRef, useMemo, useEffect } from 'react';
import type { FC } from 'react';
import { View, Text, Image, Alert, Animated, Easing } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import { Avatar } from '../components';
import { styles } from './Person.style';
import { Text as ThemeText, View as ThemeView } from '../theme/paper';
import { useToggle, useAnimatedValue, useMonitorAnimatedValue, useStyle } from '../hooks';

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
}

const PersonToggle: FC<PersonProps> = ({ person, deletePressed }) => {
  const animValue = useAnimatedValue(0);
  const [started, toggleStarted] = useToggle(false);

  const avatarPressed = useCallback(() => {
    Animated.timing(
      animValue, { useNativeDriver: false, toValue: started ? 0 : 1, duration: 1000, easing: Easing.bounce }
    ).start(toggleStarted)
  }, [started]);

  const textAnimStyle = useStyle({
    fontSize: animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 30]
    }),
    color: animValue.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [MD2Colors.lightBlue900, MD2Colors.lime500, MD2Colors.blue900]
    })
  })
  
  const rightViewAnimStyle = useStyle({ opacity: animValue });

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed} />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <Animated.View style={[styles.rightView]}>
        <Animated.Text style={[styles.name, textAnimStyle]}>{person.name}</Animated.Text>
        <Text style={[styles.email]} onPress={avatarPressed}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon name='trash-can-outline' size={26} color={MD2Colors.lightBlue500} onPress={deletePressed} />
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
        <Image style={[styles.image]} source={{ uri: person.image }} />
        <View style={[styles.countsView]}>
          <Icon name="comment" size={24} color={MD2Colors.blue500} />
          <Icon name="account" size={24} color={MD2Colors.purple500} />
          <Icon name="heart" size={24} color={MD2Colors.red500} />
        </View>
      </Animated.View>
    </View>
  )
}
export default PersonToggle;