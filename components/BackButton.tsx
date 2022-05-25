import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <Pressable style={[styles.back]} onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" style={[styles.icon]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  back: {
    top: 20,
    zIndex: 20,
    left: 15,
    position: 'absolute',
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#0000ff66',
    textAlign: 'center',
    alignContent: 'center',
  },
  icon: {
    marginTop: 8,
    fontSize: 24,
    opacity: 1,
    alignSelf: 'center',
  },
});
