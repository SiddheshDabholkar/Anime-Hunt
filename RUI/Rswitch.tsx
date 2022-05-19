import {SwitchProps, Switch, ViewProps} from 'react-native';
import React, {memo, useContext} from 'react';
import {ThemeContext} from '../context/Theme/ThemeContextProvider';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

const Rswitch: React.FC<SwitchProps & ViewProps> = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const toggleSwitch = () => toggleTheme!(theme);

  const ASwitch = Animated.createAnimatedComponent(Switch);

  //   const progress = useDerivedValue(() => {
  //     return theme === 'dark' ? withSpring(1) : withSpring(0);
  //   }, [theme]);

  //   const rTrackColor = useAnimatedStyle(() => {
  //     const
  //   });

  return (
    <ASwitch
      trackColor={{false: withSpring('#767577'), true: withSpring('#81b0ff')}}
      thumbColor={
        theme === 'dark' ? withSpring('#f5dd4b') : withSpring('#f4f3f4')
      }
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={theme === 'dark'}
    />
  );
};

export default memo(Rswitch);
