import {StyleSheet, View} from 'react-native';
import React, {ReactNode, FC, memo, useContext} from 'react';
import {ThemeContext, colors} from '../context/Theme/ThemeContextProvider';
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

type BackgroundType = {
  children: ReactNode;
};

const Background: FC<BackgroundType> = ({children}) => {
  const {theme} = useContext(ThemeContext);

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withSpring(1) : withSpring(0);
  }, [theme]);

  const BgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.dark.background, colors.light.background],
    );
    return {
      backgroundColor,
    };
  });

  return <View style={[styles.container, BgStyle]}>{children}</View>;
};

export default memo(Background);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
