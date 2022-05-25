import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Rbackground, Rtext} from '../../../RUI';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

const Scanner = () => {
  const {navigate} = useNavigation();
  return (
    <Rbackground style={[styles.container]}>
      <Rbackground style={[styles.card]}>
        <FastImage
          style={[styles.image]}
          source={require('../../../assets/zenitsu.gif')}
          resizeMode="cover"
        />
        <View style={[styles.content]}>
          <Rtext style={[styles.text]}>Scan the anime</Rtext>
          <TouchableOpacity onPress={() => navigate('Camera')}>
            <FastImage
              style={[styles.icon]}
              source={require('../../../assets/scan.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </Rbackground>
    </Rbackground>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  icon: {
    height: 50,
    width: 50,
  },
});
