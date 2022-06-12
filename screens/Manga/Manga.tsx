import {StyleSheet, View} from 'react-native';
import React from 'react';
import {graphqlClient} from '../../App';
import {useMangaQuery} from '../../graphql/generated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStack} from '../../App.types';
import {Rbackground, Rtext} from '../../RUI';
import FastImage from 'react-native-fast-image';
import {removeHtmlTags} from '../../helpers/removeHtmlTags';

type MangaPageTypes = NativeStackScreenProps<RootStack, 'Manga'>;

const MangaPage: React.FC<MangaPageTypes> = ({route}) => {
  const {id} = route.params;
  const {data, isError, isLoading} = useMangaQuery(graphqlClient, {id});

  if (isLoading) {
    return <Rtext>Loading...</Rtext>;
  }

  const MangaData = data?.Media!;

  return (
    <Rbackground goBack>
      <FastImage
        style={styles.bg}
        resizeMode="cover"
        source={{uri: MangaData.bannerImage!}}
      />
      <FastImage
        style={styles.cover}
        resizeMode="cover"
        source={{uri: MangaData.coverImage?.extraLarge!}}
      />
      <View style={styles.Bottom}>
        <View style={styles.titleCont}>
          <Rtext style={styles.title} lightTxtColor="#0000ff66">
            {MangaData.title?.english!}
          </Rtext>
          <Rtext style={styles.title} lightTxtColor="#0000ff66">
            {MangaData.title?.native!}
          </Rtext>
        </View>
        <Rtext style={styles.description}>
          {removeHtmlTags(MangaData.description!)}
        </Rtext>
      </View>
    </Rbackground>
  );
};

export default MangaPage;

const styles = StyleSheet.create({
  bg: {
    height: 300,
    opacity: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cover: {
    top: 120,
    position: 'absolute',
    height: 300,
    width: 225,
    zIndex: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  Bottom: {
    padding: 20,
    flex: 1,
    textAlign: 'center',
    marginVertical: 120,
  },
  titleCont: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
  },
});
