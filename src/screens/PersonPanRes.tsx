import React, { useState } from 'react';
import type {FC} from 'react';
import { Platform, PanResponder } from 'react-native';
import type { GestureResponderEvent, PanResponderGestureState } from 'react-native'
import { View, Text } from '../theme/paper'
import * as D from '../data';
import { useScrollEnabled } from '../contexts';

type Event = GestureResponderEvent
type State = PanResponderGestureState

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonPanRes: FC<PersonProps> = ({ person, deletePressed }) => {
  const [gestureState, setGestureState] = useState<State | null>(null);
  const [scrollEnabled, setScrollEnabled] = useScrollEnabled()

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder() { return true },
    onPanResponderGrant(e: Event, s: State) {
      setGestureState(s)
    },
    onPanResponderRelease(e: Event, s: State) {
      setGestureState(s)
    },
    onMoveShouldSetPanResponder() { return true },
    onPanResponderMove(e: Event, s: State) {
      setGestureState(s)
    }
  })

  return (
    <View background style={[{ width: '100%' }]}>
      <Text>
        scrollEnabled: {scrollEnabled ? 'true' : 'false'}
      </Text>
      <View accent {...panResponder.panHandlers} style={{ height: 300, flex: 1 }}>
        {gestureState && <Text>{JSON.stringify(gestureState, null, 2)}</Text>}
      </View>
    </View>
  );
};

export default PersonPanRes;
