import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from 'src/components/Themed';
import endpoints from 'src/constants/Endpoint';
import { Post } from 'src/types/Posts';
import trimString from 'src/utils/TrimString';
import Image from './Image';

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '45%',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'gray',
    marginBottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  text: {
    fontSize: 14,
    marginHorizontal: 15,
    textAlign: 'center',
  },
});

function RenderPost({
  item,
  onPostClick,
}: {
  item: Post;
  onPostClick: (item: Post) => void;
}) {
  const onClick = () => {
    onPostClick(item);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image
        source={{ uri: endpoints.media + item.image }}
        style={styles.img}
        resizeMode="cover"
      />
      <Text style={styles.text}>{trimString(item.name, 15)}</Text>
    </TouchableOpacity>
  );
}

const MemoizedPost = React.memo(
  RenderPost,
  (prevProps, nextProps) =>
    prevProps.item.image === nextProps.item.image &&
    prevProps.item.name === nextProps.item.name,
);

export default MemoizedPost;
