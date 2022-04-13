import React from 'react';
import { StyleSheet } from 'react-native';

import { Comment } from 'src/types/Posts';
import { View, Text } from './Themed';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function RenderComment({ item }: { item: Comment }) {
  return (
    <View style={styles.container}>
      <Text>{'●  '}</Text>
      <Text>{item.text}</Text>
    </View>
  );
}

export default RenderComment;
