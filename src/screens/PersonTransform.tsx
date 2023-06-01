import React, {useCallback, useState, useRef, useEffect, useMemo } from 'react';
import type {FC} from 'react';
import {View, Image, Text, Alert, Animated, Easing } from 'react-native';
import {MD2Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {styles} from './Person.style';
import { Avatar } from '../components';
import { useAnimatedValue, useStyle, useToggle } from '../hooks';
import { interpolate } from '../utils';

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonTransform: FC<PersonProps> = ({ person: initialPerson, deletePressed }) => {
  const [person, setPerson] = useState<D.IPerson>(initialPerson);

  const [started, toggleStarted] = useToggle(false);
  const animValue = useAnimatedValue(0)
  const nameAnimStyle = useStyle({
    // transform: [{translateX: interpolate(animValue, [0,500])}]
  })

  const emailAnimStyle = useStyle({
    marginTop: started ? 20 : 0,
    // transform: [{rotate: interpolate(animValue, ['0deg', '180deg'])}]
  })

  const commentsAnimStyle = useStyle({
    transform: [
      // { translateY: interpolate(animValue, [0, 200]) },
      // { rotate: interpolate(animValue, ['0deg', '45deg']) },
      { scale: interpolate(animValue, [1, 2]) }
    ]
  })

  const avatarPressed = useCallback(
    () => Animated.timing(animValue, {
      useNativeDriver: false,
      toValue: started ? 0 : 1,
      easing: Easing.bounce
    }).start(toggleStarted), [started]
  )

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
        <Text style={[styles.name, nameAnimStyle]}>{person.name}</Text>
        <Text style={[styles.email, emailAnimStyle]}>{person.email}</Text>
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
        <Animated.Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.comments, commentsAnimStyle]}>
          {person.comments}
        </Animated.Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <Icon name="comment" size={24} color={MD2Colors.blue500} />
          <Icon name="youtube-tv" size={24} color={MD2Colors.purple500} />
          <Icon name="heart" size={24} color={MD2Colors.red500} />
        </View>
      </View>
    </View>
  );
};

export default PersonTransform;
