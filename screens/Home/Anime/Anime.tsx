import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {graphqlClient} from '../../../App';
import {useAnimeListQuery} from '../../../graphql/generated';
import {Rbackground, Rtext} from '../../../RUI';
import FastImage from 'react-native-fast-image';
import {Blurhash} from 'react-native-blurhash';
import {styles} from '../Styles';

const Anime = () => {
  const {data, isLoading, isError} = useAnimeListQuery(graphqlClient);
  const Details = data?.Page?.media;

  return (
    <Rbackground style={[styles.container]}>
      <Rtext style={[styles.text]} lightTxtColor="#0000ff66">
        Anime
      </Rtext>
      <FlatList
        horizontal
        pagingEnabled
        data={!isLoading || !isError ? Details : new Array(5).fill('')}
        renderItem={({item}) => (
          <TouchableOpacity style={[styles.card]}>
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
          </TouchableOpacity>
        )}
      />
    </Rbackground>
  );
};

export default Anime;
