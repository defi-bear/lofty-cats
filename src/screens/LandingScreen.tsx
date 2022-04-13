import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from 'src/components/Themed';
import { RootStackScreenProps } from 'src/types/Navigation';
import WelcomeCats from 'src/assets/images/welcome_cats.png';
import Button from 'src/components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: '90%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    marginTop: 20,
  },
  welcomeCats: {
    width: '90%',
    resizeMode: 'contain',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  login: {
    marginTop: 50,
  },
  signup: {
    marginTop: 20,
  },
});

export default function LandingScreen({ navigation }: RootStackScreenProps<'Landing'>) {
  const onLogIn = () => {
    navigation.navigate('Home');
  };

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Image source={WelcomeCats} style={styles.welcomeCats} />
      <View style={styles.main}>
        <Text style={styles.title}>Cats Instagram</Text>
        <Text style={styles.description}>
          This is the instagram for cats aka Catstagram.
        </Text>
        <Button type="primary" styles={styles.login} onPress={onLogIn}>
          Log In
        </Button>
        <Button type="secondary" styles={styles.signup} onPress={onSignUp}>
          Sign Up
        </Button>
      </View>
    </View>
  );
}
