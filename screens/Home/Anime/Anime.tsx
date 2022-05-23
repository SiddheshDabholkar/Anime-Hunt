import React from 'react';
import {StyleSheet} from 'react-native';
import {graphqlClient} from '../../../App';
import {useAnimeListQuery} from '../../../graphql/generated';
import {Rcarousel, Rbackground} from '../../../RUI';

const Anime = () => {
  const {data, isLoading, isError} = useAnimeListQuery(graphqlClient);

  console.log('data', data?.Page?.media!);
  const d = data?.Page?.media!;

  type hmm = typeof d;

  return (
    <Rbackground style={[styles.container]}>
      {/* <Rcarousel
        data={data?.Page?.media!}
        isLoading={isLoading}
        isError={isError}
      /> */}
    </Rbackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
export default Anime;
