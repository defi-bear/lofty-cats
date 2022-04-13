import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Toast from 'react-native-root-toast';

import Back from 'src/components/Back';
import Button from 'src/components/Button';
import Image from 'src/components/Image';
import Input from 'src/components/Input';
import { Text, View } from 'src/components/Themed';
import RenderComment from 'src/components/Comment';
import endpoints from 'src/constants/Endpoint';
import { RootStackScreenProps } from 'src/types/Navigation';
import { Comment } from 'src/types/Posts';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imgContainer: {
    height: 250,
    justifyContent: 'flex-end',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    paddingHorizontal: 30,
    fontSize: 18,
    textAlign: 'center',
  },
  commentRow: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  commentInput: {
    width: '100%',
  },
  comments: {
    width: '90%',
    marginTop: 30,
  },
});

type CommentProps = {
  text: string;
  entry: string;
};

export default function PostDetailScreen({
  navigation,
  route,
}: RootStackScreenProps<'PostDetail'>) {
  const { pk, image, name } = route.params;
  const [commentText, setCommentText] = useState('');

  const { data: comments, refetch } = useQuery<Comment[], Error>(
    ['comments'],
    (): Promise<Comment[]> =>
      axios.get(endpoints.comments).then((response) => response.data),
  );
  const mutation = useMutation((data: CommentProps) =>
    axios.post(endpoints.comments, data),
  );

  const onComment = () => {
    const data = {
      text: commentText,
      entry: pk,
    };
    mutation.mutate(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      Toast.show('Comment success', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
      });
      refetch();
    }
  }, [mutation.isSuccess, refetch]);

  return (
    <View style={styles.container}>
      <Back onBackPress={() => navigation.goBack()} />
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: endpoints.media + image }}
          style={styles.img}
          resizeMode="cover"
        />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.commentRow}>
          <Input
            label="Your comment Here"
            style={styles.commentInput}
            onChangeText={(text) => setCommentText(text)}
          />
          <Button type="primary" onPress={onComment} loading={mutation.isLoading}>
            Comment
          </Button>
        </View>
        <View style={styles.comments}>
          <FlatList<Comment>
            data={comments?.filter((comment) => comment.entry === pk)}
            renderItem={RenderComment}
            keyExtractor={(item) => item.pk}
          />
        </View>
      </View>
    </View>
  );
}
