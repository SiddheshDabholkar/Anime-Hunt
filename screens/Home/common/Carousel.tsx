import React from 'react';
import {FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Rbackground, Rtext, width} from '../../../RUI';
import {Blurhash} from 'react-native-blurhash';
import FastImage from 'react-native-fast-image';
import {AnimeListQuery, MangaListQuery} from '../../../graphql/generated';
import {useNavigation} from '@react-navigation/native';

type CarouselType = {
  data: AnimeListQuery | MangaListQuery;
  isLoading: boolean;
  isError: boolean;
  title: string;
};

const Carousel: React.FC<CarouselType> = ({
  data,
  isLoading,
  isError,
  title,
}) => {
  const Details = data?.Page?.media;
  const {navigate} = useNavigation();
  const isAnime = title === 'Anime';

  return (
    <Rbackground style={[styles.container]}>
      <Rtext style={[styles.text]} lightTxtColor="#0000ff66">
        {title}
      </Rtext>
      <FlatList
        horizontal
        pagingEnabled
        data={!isLoading || !isError ? Details : new Array(5).fill('')}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.card]}
            onPress={() => {
              navigate(isAnime ? 'Anime' : 'Manga', {
                id: item.id,
              });
            }}>
            {!isLoading ? (
              <FastImage
                resizeMode="cover"
                source={{
                  uri: item?.coverImage.medium,
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
          </TouchableOpacity>
        )}
      />
    </Rbackground>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 2,
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
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Carousel;
