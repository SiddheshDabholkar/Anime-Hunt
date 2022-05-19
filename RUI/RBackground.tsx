import {StyleProp, StyleSheet, ViewProps, ViewStyle} from 'react-native';
import React, {ReactNode, FC, memo, useContext} from 'react';
import {ThemeContext, Themes} from '../context/Theme/ThemeContextProvider';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

type RBackgroundType = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const RBackground: FC<RBackgroundType & ViewProps> = ({children, style}) => {
  const {theme} = useContext(ThemeContext);

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withSpring(1) : withSpring(0);
  }, [theme]);

  const BgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [1, 0],
      [Themes.dark.colors.background, Themes.light.colors.background],
    );
    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, BgStyle, style]}>
      {children}
    </Animated.View>
  );
};

export default memo(RBackground);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});
