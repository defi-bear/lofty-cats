import Colors from 'src/constants/Colors';
import useColorScheme from './useColorScheme';

// The useThemeColor hook returns a color from the theme based on the current
export default function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }
  return Colors[theme][colorName];
}
