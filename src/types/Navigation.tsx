/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Post } from './Posts';

type AddPhotoParams = {
  refetch: () => void;
};

export type RootStackParamList = {
  Landing: undefined;
  SignUp: undefined;
  Home: undefined;
  PostDetail: Post;
  AddPhoto: AddPhotoParams;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
