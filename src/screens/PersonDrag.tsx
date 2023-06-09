import React, { useMemo } from 'react';
import type {FC} from 'react';
import { MD2Colors } from 'react-native-paper';
import * as D from '../data';
import { View } from '../theme/paper'
import DragAvatar from './DragAvatar';

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonDrag: FC<PersonProps> = ({ person, deletePressed }) => {
  
  const colors = useMemo(() => [
    MD2Colors.pink500,
    MD2Colors.yellow500,
    MD2Colors.lime500,
    MD2Colors.lightBlue500,
  ], [])

  const circles = useMemo(() =>
    colors.map((color, index) => {
      return (
        <DragAvatar key={index} size={70} backgroundColor={color} />
      )
    }), [])

  return (
    <View style={{ flex: 1, height: 600 }}>
      {circles}
    </View>
  );
};

export default PersonDrag;
