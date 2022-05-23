import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {graphqlClient} from '../../../App';
import {useAnimeListQuery} from '../../../graphql/generated';
import {Rbackground, Rtext} from '../../../RUI';
import FastImage from 'react-native-fast-image';
import {Blurhash} from 'react-native-blurhash';

const {width} = Dimensions.get('screen');

const Anime = () => {
  const {data, isLoading, isError} = useAnimeListQuery(graphqlClient);
  const Details = data?.Page?.media;

  return (
    <Rbackground style={[styles.container]}>
      <Rtext>Anime</Rtext>
      <FlatList
        horizontal
        pagingEnabled
        data={!isLoading || !isError ? Details : new Array(5).fill('')}
        renderItem={({item}) => (
          <View style={[styles.card]}>
            {!isLoading ? (
              <FastImage
                resizeMode="cover"
                source={{
                  uri: item?.bannerImage!,
                }}
                style={[styles.img]}>
                <Rtext>lol</Rtext>
              </FastImage>
            ) : (
              <View style={[styles.img]}>
                <Blurhash
                  blurhash="LGFFaXYk^6#M@-5c,1J5@[or[Q6."
                  resizeMode="cover"
                  style={[styles.img]}
                />
              </View>
            )}
          </View>
        )}
      />
    </Rbackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  card: {
    width: width / 3,
    height: 220,
    margin: 6,
    overflow: 'hidden',
  },
  img: {
    overflow: 'hidden',
    borderRadius: 10,
    flex: 1,
  },
});
export default Anime;
