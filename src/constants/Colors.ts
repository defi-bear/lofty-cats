const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
export const primaryColor = '#00B0FF';

/* Light and dark theme colors. */
export default {
  light: {
    text: primaryColor,
    background: '#FFF',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    gray: '#d4d4d4',
  },
  dark: {
    text: primaryColor,
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    gray: primaryColor,
  },
};
