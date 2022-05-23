import React from 'react';
import {Rbackground} from '../../RUI';
import Scanner from './Scanner/Scanner';
import Anime from './Anime/Anime';
import Manga from './Manga/Manga';
import {StyleSheet} from 'react-native';

const Home: React.FC = () => {
  return (
    <Rbackground style={[styles.container]}>
      <Scanner />
      <Anime />
      <Manga />
    </Rbackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Home;
