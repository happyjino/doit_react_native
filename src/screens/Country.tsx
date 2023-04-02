import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import type { FC } from 'react';
import * as D from '../data';

export type CountryProps = {
  country: D.ICountry
}

const Country: FC<CountryProps> = ({ country }) => {
  const { name, capital, region } = country;
  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.names}>{String(name)}</Text>
      </View>
      <View>
        <Text>capital: {String(capital)}</Text>
        <Text>region: {String(region)}</Text>
      </View>
    </View>
  );
};

export default Country;

const styles = StyleSheet.create({
  view: {padding: 5},
  names: {fontSize: 30, fontWeight: '400'},
});

