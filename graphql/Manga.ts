import {gql} from 'graphql-request';

export const mangalistDocuments = gql`
  query mangaList {
    Page(page: 10, perPage: 10) {
      pageInfo {
        total
        perPage
      }
      media(type: MANGA, sort: FAVOURITES_DESC) {
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
