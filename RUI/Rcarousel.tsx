import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import Rbackground from './Rbackground';
import Rtext from './Rtext';

const {height, width} = Dimensions.get('screen');

const data = [
  {id: 1, name: 'lol'},
  {id: 2, name: 'lol'},
  {id: 3, name: 'lol'},
  {id: 4, name: 'lol'},
  {id: 5, name: 'lol'},
];

const RCarousel = () => {
  return (
    <Rbackground style={[styles.container]}>
      <Rbackground style={[styles.header]}>
        <Rtext>Header</Rtext>
      </Rbackground>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        renderItem={({item}) => (
          <Rbackground style={[styles.card]}>
            <Rtext>{item.name}</Rtext>
          </Rbackground>
        )}
      />
    </Rbackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  card: {
    width: width / 2.2,
    height: height / 4,
    borderColor: 'red',
    borderWidth: 10,
    borderRadius: 20,
    // marginRight: 5,
    // marginLeft: 5,
  },
  header: {
    height: 50,
  },
});

export default RCarousel;
