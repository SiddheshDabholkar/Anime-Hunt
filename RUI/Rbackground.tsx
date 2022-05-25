import {
  Pressable,
  StyleProp,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React, {ReactNode, FC, memo, useContext} from 'react';
import {ThemeContext, Themes} from '../context/Theme/ThemeContextProvider';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import BackButton from '../components/BackButton';

type RBackgroundType = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  darkBgColor?: string;
  lightBgColor?: string;
  goBack?: boolean;
};

const RBackground: FC<RBackgroundType & ViewProps> = ({
  children,
  style,
  darkBgColor,
  lightBgColor,
  goBack,
}) => {
  const {theme} = useContext(ThemeContext);

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withSpring(1) : withSpring(0);
  }, [theme]);

  const BgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [1, 0],
      [
        darkBgColor ? darkBgColor : Themes.dark.colors.background,
        lightBgColor ? lightBgColor : Themes.light.colors.background,
      ],
    );
    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, BgStyle, style]}>
      {goBack ? <BackButton /> : null}
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
