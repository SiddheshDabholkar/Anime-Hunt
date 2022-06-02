import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';

const Searching = () => {
  const fetchAnimeInfo = () => {
    return fetch('https://api.trace.moe/search', {
      method: 'POST',
      body: fs.readFileSync('demo.jpg'),
      headers: {'Content-type': 'image/jpeg'},
    });
  };

  const {isError, isLoading, data} = useQuery('SearchedAnime', fetchAnimeInfo);

  console.log(isLoading);

  if (!isLoading) {
    console.log('data', data);
  }

  return (
    <View>
      <Text>Searching</Text>
    </View>
  );
};

export default Searching;

const styles = StyleSheet.create({});
