import {gql} from 'graphql-request';

export const animelistDocuments = gql`
  query animeList {
    Page(page: 1, perPage: 10) {
      media(type: ANIME, sort: FAVOURITES_DESC) {
        id
        title {
          romaji
          english
          native
        }
        type
        genres
        description
        coverImage {
          color
          medium
          large
          extraLarge
        }
        siteUrl
        bannerImage
      }
    }
  }
`;

