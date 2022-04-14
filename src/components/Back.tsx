import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import useColorScheme from 'src/hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  back: {
    fontSize: 20,
  },
});

/**
 * It renders a back button that calls the onBackPress function when pressed
 * @param  - `onBackPress` - a function that will be called
 * when the back button is pressed.
 * @returns A TouchableOpacity component with a Text component inside of it.
 */
export default function Back({ onBackPress }: { onBackPress: () => void }) {
  const theme = useColorScheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onBackPress}>
      <Text style={[styles.back, { color: theme === 'dark' ? 'white' : 'black' }]}>
        ←
      </Text>
    </TouchableOpacity>
  );
}
