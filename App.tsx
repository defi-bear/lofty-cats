import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RootSiblingParent } from 'react-native-root-siblings';

import useColorScheme from 'src/hooks/useColorScheme';
import useCachedResources from 'src/hooks/useCachedResources';
import Navigation from 'src/navigation';

const queryClient = new QueryClient();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <RootSiblingParent>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </RootSiblingParent>
    </QueryClientProvider>
  );
}
