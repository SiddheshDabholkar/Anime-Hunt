import React from 'react';
import {graphqlClient} from '../../../App';
import {useAnimeListQuery} from '../../../graphql/generated';
import Carousel from '../common/Carousel';

const Anime = () => {
  const {data, isLoading, isError} = useAnimeListQuery(graphqlClient);

  return (
    <Carousel
      data={data!}
      isLoading={isLoading}
      isError={isError}
      title="Anime"
    />
  );
};

export default Anime;
