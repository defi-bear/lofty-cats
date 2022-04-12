import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import useThemeColor from 'src/hooks/useThemeColor';

type ThemeButton = {
  children: string;
  type: string;
  styles?: StyleProp<ViewStyle>;
};

type ButtonProps = ThemeButton & TouchableOpacity['props'];

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
  },
});

export default function Button({
  children,
  type,
  styles: ButtonStyles,
  ...props
}: ButtonProps) {
  const backgroundColor = useThemeColor({ light: undefined, dark: undefined }, 'text');
  const textColor = useThemeColor({ light: undefined, dark: undefined }, 'background');
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'primary'
          ? { backgroundColor }
          : {
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: backgroundColor,
            },
        ButtonStyles,
      ]}
      {...props}
    >
      <Text
        style={[styles.text, { color: type === 'primary' ? textColor : backgroundColor }]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  styles: undefined,
};
