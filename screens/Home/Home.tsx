import React from 'react';
import {Rbackground} from '../../RUI';
import Scanner from './Scanner/Scanner';
import Anime from './Anime/Anime';
import Manga from './Manga/Manga';

const Home: React.FC = () => {
  return (
    <Rbackground>
      <Scanner />
      <Anime />
      <Manga />
    </Rbackground>
  );
};

export default Home;
