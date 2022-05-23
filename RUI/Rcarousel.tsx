import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Rbackground from './Rbackground';
import Rtext from './Rtext';
import {AnimeListQuery} from '../graphql/generated';

const {height, width} = Dimensions.get('screen');

type a = AnimeListQuery['Page'];

type RCarouselType = {
  isLoading: boolean;
  isError: boolean;
  data: any;
  Header: string;
  renderItem: React.FC<keyof a>;
  Card: React.FC;
};

const RCarousel: React.FC<RCarouselType> = ({
  isLoading,
  isError,
  data,
  Card,
  renderItem,
  Header,
}) => {
  return (
    <Rbackground style={[styles.container]}>
      <Rbackground style={[styles.header]}>
        <Rtext>{Header}</Rtext>
      </Rbackground>
      <FlatList data={data} horizontal pagingEnabled renderItem={renderItem} />
    </Rbackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  card: {
    width: width / 2.2,
    height: height / 4,
    borderRadius: 20,
    margin: 5,
    // marginRight: 2,
    // marginLeft: 2,
  },
  header: {
    height: 50,
  },
  bgImg: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default RCarousel;
