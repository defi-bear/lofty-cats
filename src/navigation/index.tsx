/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { RootStackParamList } from 'src/types/Navigation';
import LandingScreen from 'src/screens/LandingScreen';
import ModalScreen from 'src/screens/ModalScreen';
import NotFoundScreen from 'src/screens/NotFoundScreen';
import SignUpScreen from 'src/screens/SignUpScreen';
import HomeScreen from 'src/screens/HomeScreen';
import PostDetailScreen from 'src/screens/PostDetailScreen';
import AddPhotoScreen from 'src/screens/AddPhotoScreen';
import LinkingConfiguration from './LinkingConfiguration';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddPhoto"
        component={AddPhotoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
