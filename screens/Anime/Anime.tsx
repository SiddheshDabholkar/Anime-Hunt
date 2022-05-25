import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStack} from '../../App.types';
import {Rbackground, Rtext, height, Rchip} from '../../RUI';
import {useAnimeQuery} from '../../graphql/generated';
import {graphqlClient} from '../../App';
import {FlatList, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {removeHtmlTags} from '../../helpers/removeHtmlTags';

type AnimePageTypes = NativeStackScreenProps<RootStack, 'Anime'>;

const AnimePage: React.FC<AnimePageTypes> = ({route}) => {
  const {id} = route.params;
  const {data, error, isError, isLoading} = useAnimeQuery(graphqlClient, {id});

  if (isLoading) {
    return <Rtext>Loading...</Rtext>;
  }

  const AnimeData = data?.Media!;
  return (
    <Rbackground goBack>
      <FastImage
        resizeMode="cover"
        style={[styles.img]}
        source={{uri: AnimeData.bannerImage!}}
      />
      <FastImage
        resizeMode="cover"
        style={[styles.floatingImg]}
        source={{uri: AnimeData.coverImage?.extraLarge!}}
      />
      <View style={[styles.infoContainer]}>
        <Rtext style={styles.NativeName} lightTxtColor="#0000ff66">
          {AnimeData.title?.native!}
        </Rtext>
        <Rtext style={styles.otherName}>{AnimeData.title?.english!}</Rtext>
      </View>
      <FlatList
        contentContainerStyle={styles.chips}
        data={AnimeData.genres}
        renderItem={({item}) => <Rchip text={item!} />}
      />
      <View>
        <Rtext>{removeHtmlTags(AnimeData.description!)}</Rtext>
      </View>
    </Rbackground>
  );
};

const styles = StyleSheet.create({
  img: {
    height: height / 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    opacity: 0.5,
  },
  floatingImg: {
    top: 150,
    left: 20,
    zIndex: 10,
    height: 220,
    width: 180,
    position: 'absolute',
    borderRadius: 10,
    elevation: 10,
  },
  infoContainer: {
    marginTop: 15,
    marginBottom: 15,
    width: 230,
    alignSelf: 'flex-end',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NativeName: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  otherName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  chips: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default AnimePage;
