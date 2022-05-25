import React from 'react';
import {useMangaListQuery} from '../../../graphql/generated';
import {graphqlClient} from '../../../App';
import Carousel from '../common/Carousel';

const Manga = () => {
  const {data, isLoading, isError} = useMangaListQuery(graphqlClient);

  return (
    <Carousel
      data={data!}
      isLoading={isLoading}
      isError={isError}
      title="Manga"
    />
  );
};

export default Manga;
