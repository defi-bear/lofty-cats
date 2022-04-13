import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-root-toast';

import Back from 'src/components/Back';
import { RootStackScreenProps } from 'src/types/Navigation';
import { View } from 'src/components/Themed';
import Button from 'src/components/Button';
import Image from 'src/components/Image';
import Input from 'src/components/Input';
import { useMutation } from 'react-query';
import axios from 'axios';
import endpoints from 'src/constants/Endpoint';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourPhotoText: {
    fontSize: 18,
    marginRight: 30,
  },
  imgContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 195,
    height: 195,
    borderRadius: 195,
  },
  uploadPhoto: {
    width: 150,
  },
  mainContainer: {
    marginTop: 30,
    width: '90%',
  },
  postButton: {
    marginTop: 10,
  },
});

export default function AddPhotoScreen({
  navigation,
  route,
}: RootStackScreenProps<'AddPhoto'>) {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [title, setTitle] = useState('');

  const mutation = useMutation((data: FormData) =>
    axios.post(endpoints.posts, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: () => data,
    }),
  );

  useEffect(() => {
    if (mutation.isSuccess) {
      Toast.show('Upload photo success', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
      });
      route.params.refetch();
      navigation.navigate('Home');
    }
  }, [mutation.isSuccess, route.params, navigation]);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) {
      setSelectedImage(pickerResult.uri);
    }
  };

  const onPost = () => {
    const formData = new FormData();
    if (!title) {
      Alert.alert('Title is required!');
    } else if (!selectedImage) {
      Alert.alert('Image is required!');
    } else {
      formData.append('name', title);
      const filename = selectedImage.split('/').pop();
      const match = /\.(\w+)$/.exec(filename || '');
      const type = match ? `image/${match[1]}` : `image`;

      formData.append(
        'image',
        JSON.parse(JSON.stringify({ uri: selectedImage, name: filename, type })),
      );
      mutation.mutate(formData);
    }
  };

  return (
    <View style={styles.container}>
      <Back onBackPress={() => navigation.goBack()} />
      <View style={styles.topContainer}>
        <View style={styles.imgContainer}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.img} />
          ) : (
            <Button
              type="secondary"
              styles={styles.uploadPhoto}
              onPress={openImagePickerAsync}
            >
              Upload Photo
            </Button>
          )}
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Input label="Title" onChangeText={(text) => setTitle(text)} />
        <Button
          type="primary"
          styles={styles.postButton}
          onPress={onPost}
          loading={mutation.isLoading}
        >
          Post
        </Button>
      </View>
    </View>
  );
}
