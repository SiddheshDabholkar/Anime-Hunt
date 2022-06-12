import {StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useInfiniteMangaListQuery} from '../../graphql/generated';
import {graphqlClient} from '../../App';
import {Rbackground, Rtext} from '../../RUI';
import Card from '../../components/Card';

const Mangalist = () => {
  const [page, setPage] = useState(1);
  const {data, fetchNextPage, isLoading} = useInfiniteMangaListQuery(
    'page',
    graphqlClient,
    {
      page,
    },
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
        renderItem={({item}) => (
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
        )}
      />
    </Rbackground>
  );
};

export default Mangalist;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
