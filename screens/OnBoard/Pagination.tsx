import React, {FC} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

type PaginationTypes = {
  index: number;
  activeIndex: Animated.SharedValue<number>;
  translateX: Animated.SharedValue<number>;
};

const {width} = Dimensions.get('screen');

const Pagination: FC<PaginationTypes> = ({index, activeIndex, translateX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rPageStyle = useAnimatedStyle(() => {
    const isActive = activeIndex.value === index;
    const rwidth = interpolate(
      translateX.value,
      inputRange,
      [20, 50, 20],
      Extrapolate.CLAMP,
    );

    const backgroundColor = interpolateColor(
      isActive ? 1 : 0,
      [1, 0],
      ['#0000ff66', '#D3D3D3'],
    );

    return {
      width: withSpring(rwidth),
      backgroundColor: backgroundColor,
    };
  });

  return <Animated.View style={[styles.page, rPageStyle]} />;
};

export default Pagination;

const styles = StyleSheet.create({
  page: {
    height: 8,
    margin: 1,
    borderRadius: 9,
    marginHorizontal: 2,
    borderWidth: 1,
  },
});
