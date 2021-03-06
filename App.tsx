import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Screens from './screens/Screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MMKV} from 'react-native-mmkv';
import {ThemeContextProvider} from './context/Theme/ThemeContextProvider';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {QueryClientProvider, QueryClient} from 'react-query';
import {GraphQLClient} from 'graphql-request';

export const storage = new MMKV();
export const endPoint = 'https://graphql.anilist.co';
export const graphqlClient = new GraphQLClient(endPoint);
const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
  initializeMMKVFlipper({default: storage});
}

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider style={styles.container}>
        <GestureHandlerRootView style={styles.container}>
          <ThemeContextProvider>
            <Screens />
          </ThemeContextProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
