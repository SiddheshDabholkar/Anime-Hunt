import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Rbackground, Rtext} from '../../../RUI';
import FastImage from 'react-native-fast-image';

const Scanner = () => {
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
        </View>
      </Rbackground>
    </Rbackground>
  );
};


export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});
