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

export const singleAnimeList = gql`
  query anime($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      description
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      episodes
      seasonInt
      volumes
      countryOfOrigin
      isLicensed
      source
      hashtag
      trailer {
        id
      }
      genres
      duration
      chapters
      bannerImage
      popularity
      coverImage {
        extraLarge
        large
        medium
        color
      }
    }
  }
`;
