import React from 'react';
import {data} from './data';
import Single from './Single';
import {View, StyleSheet, Dimensions, Pressable} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import Pagination from './Pagination';
import {useNavigation} from '@react-navigation/native';
import {Rtext} from '../../RUI';

const {width} = Dimensions.get('screen');

export default function Onboard() {
  const {navigate} = useNavigation();
  const translateX = useSharedValue(0);

  const ScrollHandler = useAnimatedScrollHandler(
    e => (translateX.value = e.contentOffset.x),
  );

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / width);
  });

  const onPressSkip = () => {
    navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={ScrollHandler}>
        {data.map((d, i) => (
          <Single
            data={d}
            index={i}
            key={d.id}
            img={d.img}
            translateX={translateX}
            activeIndex={activeIndex}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <View style={[styles.pagination]}>
          {data.map((_, i) => (
            <Pagination
              index={i}
              activeIndex={activeIndex}
              translateX={translateX}
            />
          ))}
        </View>
        <View>
          <Pressable onPress={onPressSkip} style={styles.button}>
            <Rtext style={[styles.buttonText]}>Skip</Rtext>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingRight: 25,
    paddingLeft: 25,
    flexDirection: 'row',
    height: 50,
    width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pagination: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'transparent',
    shadowColor: 'none',
  },
  buttonText: {
    color: '#000',
  },
});
