import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View } from 'src/components/Themed';

import SignupCats from 'src/assets/images/signup_cats.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupCats: {
    width: '90%',
    resizeMode: 'contain',
  },
});

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Image source={SignupCats} style={styles.signupCats} />
    </View>
  );
}
