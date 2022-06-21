import {FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {graphqlClient} from '../../App';
import {useInfiniteAnimeListQuery} from '../../graphql/generated';
import {Rbackground, Rtext} from '../../RUI';
import Card from '../../components/Card';

const Animelist = () => {
  const [page, setPage] = useState(1);
  const {data, fetchNextPage, isLoading} = useInfiniteAnimeListQuery(
    'page',
    graphqlClient,
    {page},
  );

  if (isLoading) {
    return <Rtext>Loading...</Rtext>;
  }

  return (
    <Rbackground>
      <FlatList
        data={data?.pages}
        onEndReached={() => {
          fetchNextPage();
          setPage(page + 1);
        }}
        contentContainerStyle={styles.container}
        renderItem={({item}) => {
          // console.log('item', item);
          return (
            <FlatList
              data={item.Page?.media}
              // eslint-disable-next-line @typescript-eslint/no-shadow
              renderItem={({item}) => (
                <Card
                  id={item?.id!}
                  type="Anime"
                  coverImage={item?.coverImage?.extraLarge!}
                  title={item?.title?.english!}
                  titleNative={item?.title?.native!}
                  description={item?.description!}
                />
              )}
            />
          );
        }}
      />
    </Rbackground>
  );
};

export default Animelist;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
