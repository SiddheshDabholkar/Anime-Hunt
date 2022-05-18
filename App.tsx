import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Screens from './screens/Screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {MMKV} from 'react-native-mmkv';
import {ThemeContextProvider} from './context/Theme/ThemeContextProvider';

export const storage = new MMKV();

if (__DEV__) {
  initializeMMKVFlipper({default: storage});
}

const App: FC = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <ThemeContextProvider>
          <Screens />
        </ThemeContextProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
