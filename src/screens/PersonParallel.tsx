import React, {useCallback, useMemo } from 'react';
import type {FC} from 'react';
import {View, Image, Text, Animated, Easing } from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {styles} from './Person.style';
import { Avatar } from '../components';
import { useToggle, useTransformStyle, useAnimatedValues } from '../hooks';
import { interpolate } from '../utils';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonSequence: FC<PersonProps> = ({ person, deletePressed }) => {
  
  const [started, toggleStarted] = useToggle()
  const animValues = useAnimatedValues(3);
  const animations = useMemo(() =>
    animValues.map((animValue) =>
      Animated.spring(animValue, {
        useNativeDriver: true,
        toValue: !started ? 1 : 0,
      })
    ), [started])

  const avatarPressed = useCallback(() => { Animated.parallel(animations).start(toggleStarted) }, []);
  
  const leftIconStyle = useTransformStyle({
    translateX: interpolate(animValues[0], !started ? [-1200, 0] : [0, -1200])
  })

  const centerIconStyle = useTransformStyle({
    translateY: interpolate(animValues[1], !started ? [-1200, 0] : [0, -1200])
  })

  const rightIconStyle = useTransformStyle({
    translateX: interpolate(animValues[2], !started ? [-1200, 0] : [0, -1200])
  })

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={MD2Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <AnimatedIcon style={[leftIconStyle]} name="comment" size={24} color={MD2Colors.blue500} />
          <AnimatedIcon style={[centerIconStyle]} name="youtube-tv" size={24} color={MD2Colors.purple500} />
          <AnimatedIcon style={[rightIconStyle]} name="heart" size={24} color={MD2Colors.red500} />
        </View>
      </View>
    </View>
  );
};

export default PersonSequence;
