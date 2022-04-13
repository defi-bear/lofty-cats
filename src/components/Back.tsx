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
