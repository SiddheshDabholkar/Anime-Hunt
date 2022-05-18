import {StyleSheet, ViewProps} from 'react-native';
import React, {ReactNode, FC, memo, useContext} from 'react';
import {ThemeContext, colors} from '../context/Theme/ThemeContextProvider';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

type BackgroundType = {
  children: ReactNode;
};

const Background: FC<BackgroundType & ViewProps> = ({children}) => {
  const {theme} = useContext(ThemeContext);

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withSpring(1) : withSpring(0);
  }, [theme]);

  const BgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [1, 0],
      [colors.dark.background, colors.light.background],
    );
    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, BgStyle]}>
      {children}
    </Animated.View>
  );
};

export default memo(Background);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
