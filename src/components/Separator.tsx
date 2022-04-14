import React from 'react';
import { StyleSheet } from 'react-native';
import useThemeColor from 'src/hooks/useThemeColor';

import { Text, View } from './Themed';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
  },
  text: {
    marginHorizontal: 10,
  },
});

/**
 * A separator that will be used in signup page and login page
 * @returns A component that renders a view with a text and two lines.
 */
export default function Separator() {
  const gray = useThemeColor({ light: undefined, dark: undefined }, 'gray');
  const lineColor = [styles.line, { backgroundColor: gray }];
  return (
    <View style={styles.container}>
      <View style={lineColor} />
      <Text style={[styles.text, { color: gray }]}>or</Text>
      <View style={lineColor} />
    </View>
  );
}
