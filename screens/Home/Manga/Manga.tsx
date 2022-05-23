import React from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';
import {Rbackground, Rtext} from '../../../RUI';
import {Blurhash} from 'react-native-blurhash';
import {useMangaListQuery} from '../../../graphql/generated';
import FastImage from 'react-native-fast-image';
import {graphqlClient} from '../../../App';

const Manga = () => {
  const {data, isLoading, isError} = useMangaListQuery(graphqlClient);
  const Details = data?.Page?.media;

  return (
    <Rbackground style={[styles.container]}>
      <Rtext style={[styles.text]} lightTxtColor="#0000ff66">
        Manga
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

export default Manga;
