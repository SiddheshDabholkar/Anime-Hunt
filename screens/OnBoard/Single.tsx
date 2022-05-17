import {Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import {dataType} from './data';
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const SIZE = width * 0.7;

type SingleProps = {
  data: dataType;
  translateX: Animated.SharedValue<number>;
  activeIndex: Animated.SharedValue<number>;
  index: number;
  img: string;
};

const Single: React.FC<SingleProps> = ({data, translateX, index, img}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      transform: [{scale}],
    };
  });

  return (
    <Animated.View style={[styles.container]}>
      <Animated.View style={[styles.content]}>
        <Text style={[styles.title]}>{data.head}</Text>
        <Text style={[styles.subTitle]}>{data.body}</Text>
      </Animated.View>
      <Image source={img} style={[styles.image]} />
    </Animated.View>
  );
};

export default Single;

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    top: 10,
    paddingTop: 50,
    padding: 25,
    width: width * 0.9,
  },
  title: {
    color: '#000',
    fontSize: 70,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    position: 'absolute',
    resizeMode: 'contain',
    height: 400,
    bottom: 80,
  },
});
