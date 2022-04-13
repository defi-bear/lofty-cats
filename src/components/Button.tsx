import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import useThemeColor from 'src/hooks/useThemeColor';

type ThemeButton = {
  children: string;
  type: string;
  styles?: StyleProp<ViewStyle>;
  loading?: boolean;
};

type ButtonProps = ThemeButton & TouchableOpacity['props'];

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginRight: 10,
  },
});

export default function Button({
  children,
  type,
  styles: ButtonStyles,
  loading,
  ...props
}: ButtonProps) {
  const backgroundColor = useThemeColor({ light: undefined, dark: undefined }, 'text');
  let textColor = useThemeColor({ light: undefined, dark: undefined }, 'background');
  textColor = type === 'primary' ? textColor : backgroundColor;
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
      disabled={loading}
      {...props}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
      {loading && <ActivityIndicator size="small" color={textColor} />}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  styles: undefined,
  loading: false,
};
