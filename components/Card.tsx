import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Rbackground, Rtext} from '../RUI';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStack} from '../App.types';
import {removeHtmlTags} from '../helpers/removeHtmlTags';

type CardType = {
  id: number;
  coverImage: string;
  title: string;
  titleNative: string;
  description: string;
  type: 'Anime' | 'Manga';
};

const Card: React.FC<CardType> = ({
  coverImage,
  title,
  id,
  type,
  description,
  titleNative,
}) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<RootStack>>();
  return (
    <Pressable onPress={() => navigate(type, {id})}>
      <Rbackground style={styles.card}>
        <View>
          <FastImage
            source={{uri: coverImage}}
            resizeMode="cover"
            style={styles.img}
          />
        </View>
        <View style={styles.right}>
          <Rtext
            style={styles.title}
            lightTxtColor="blue"
            darkTxtColor="orange">
            {title}
          </Rtext>
          <Rtext lightTxtColor="blue" darkTxtColor="yellow">
            {titleNative}
          </Rtext>
          <Rtext>{removeHtmlTags(description, 300)}</Rtext>
        </View>
      </Rbackground>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: 150,
  },
  card: {
    overflow: 'hidden',
    height: 200,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 20,
    elevation: 3,
  },
  right: {
    padding: 10,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
