import {TextProps} from 'react-native';
import React, {memo, useContext} from 'react';
import {ThemeContext, Themes} from '../context/Theme/ThemeContextProvider';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

type MytextType = {
  children: React.ReactText;
};

const Rtext: React.FC<MytextType & TextProps> = ({children}) => {
  const {theme} = useContext(ThemeContext);

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withSpring(1) : withSpring(0);
  }, [theme]);

  const rTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [1, 0],
      [Themes.dark.colors.text, Themes.light.colors.text],
    );
    return {
      color,
    };
  });

  return <Animated.Text style={[rTextStyle]}>{children}</Animated.Text>;
};

export default memo(Rtext);
