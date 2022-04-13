import React, { useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { useMutation } from 'react-query';
import Toast from 'react-native-root-toast';
import axios from 'axios';

import SignupCats from 'src/assets/images/signup_cats.png';
import Button from 'src/components/Button';
import Separator from 'src/components/Separator';
import { View, Text } from 'src/components/Themed';
import Input from 'src/components/Input';
import Validate from 'src/utils/Validate';
import endpoints from 'src/constants/Endpoint';
import { RootStackScreenProps } from 'src/types/Navigation';
import Back from 'src/components/Back';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupCats: {
    resizeMode: 'contain',
    height: '30%',
  },
  main: {
    width: '90%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  signup: {
    marginTop: 30,
  },
});

type SignUpProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export default function SignUpScreen({ navigation }: RootStackScreenProps<'SignUp'>) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const mutation = useMutation((data: SignUpProps) => axios.post(endpoints.users, data));

  useEffect(() => {
    if (mutation.isSuccess) {
      Toast.show('Sign up success', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
      });
      navigation.navigate('Home');
    }
  }, [mutation.isSuccess, navigation]);

  useEffect(() => {
    if (mutation.error) {
      Toast.show('Sign up failed', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
      });
    }
  }, [mutation.error]);

  const onLogIn = () => {
    navigation.navigate('Home');
  };

  const onSignUp = () => {
    if (!firstName) {
      setFirstNameError('Full name is required');
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setLastNameError('Short name is required');
    } else {
      setLastNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
    } else if (!Validate.validateEmail(email)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    if (firstName && lastName && email && password) {
      const data = { first_name: firstName, last_name: lastName, email, password };
      mutation.mutate(data);
    }
  };

  return (
    <View style={styles.container}>
      <Back onBackPress={() => navigation.goBack()} />
      <Image source={SignupCats} style={styles.signupCats} />
      <View style={styles.main}>
        <Text style={styles.title}>Create Account</Text>
        <Input
          label="First Name"
          onChangeText={(text) => setFirstName(text)}
          error={firstNameError}
        />
        <Input
          label="Last Name"
          onChangeText={(text) => setLastName(text)}
          error={lastNameError}
        />
        <Input
          label="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          error={emailError}
        />
        <Input
          label="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          error={passwordError}
        />
        <Button
          type="primary"
          styles={styles.signup}
          onPress={onSignUp}
          loading={mutation.isLoading}
        >
          Sign up
        </Button>
        <Separator />
        <Button type="secondary" onPress={onLogIn}>
          Log in
        </Button>
      </View>
    </View>
  );
}
