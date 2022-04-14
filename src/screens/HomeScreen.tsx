import axios from 'axios';
import React from 'react';
import { ActivityIndicator, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useQuery } from 'react-query';
import RenderPost from 'src/components/Post';

import { View } from 'src/components/Themed';
import { RootStackScreenProps } from 'src/types/Navigation';
import { primaryColor } from 'src/constants/Colors';
import endpoints from 'src/constants/Endpoint';
import { Post } from 'src/types/Posts';
import Button from 'src/components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  // Getting the posts
  const { isLoading, data, refetch } = useQuery<Post[], Error>(
    ['photos'],
    (): Promise<Post[]> => axios.get(endpoints.posts).then((response) => response.data),
  );

  // Post clicked
  const onPostClick = (item: Post) => {
    navigation.navigate('PostDetail', item);
  };

  // Add photo button clicked
  const onAddPhoto = () => {
    navigation.navigate('AddPhoto', { refetch });
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={primaryColor} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <FlatList<Post>
            data={data}
            renderItem={({ item }) => (
              <RenderPost item={item} onPostClick={onPostClick} />
            )}
            keyExtractor={(item) => item.pk}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapperStyle}
          />
          <View style={styles.buttonContainer}>
            <Button type="primary" onPress={onAddPhoto}>
              Add Your Photo
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
