import React from 'react';
import { StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import useThemeColor from 'src/hooks/useThemeColor';

type InputProps = TextField['props'];

const styles = StyleSheet.create({
  containerStyle: {
    height: 70,
  },
});

/**
 * A customized TextField component.
 */
export default function Input({ ...props }: InputProps) {
  const color = useThemeColor({ light: undefined, dark: undefined }, 'text');
  return (
    <TextField
      baseColor="#777"
      textColor={color}
      containerStyle={styles.containerStyle}
      autoCapitalize="none"
      {...props}
    />
  );
}
