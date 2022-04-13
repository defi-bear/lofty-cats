import React from 'react';
import { StyleSheet } from 'react-native';

import Back from 'src/components/Back';
import { RootStackScreenProps } from 'src/types/Navigation';
import { Text, View } from 'src/components/Themed';
import Button from 'src/components/Button';

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
  uploadPhoto: {
    width: 150,
  },
});

export default function AddPhotoScreen({
  navigation,
  route,
}: RootStackScreenProps<'AddPhoto'>) {
  return (
    <View style={styles.container}>
      <Back onBackPress={() => navigation.goBack()} />
      <View style={styles.topContainer}>
        <View style={styles.imgContainer}>
          <Button type="secondary" styles={styles.uploadPhoto}>
            Upload Photo
          </Button>
        </View>
      </View>
    </View>
  );
}
