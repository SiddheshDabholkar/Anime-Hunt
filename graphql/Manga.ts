import {gql} from 'graphql-request';

export const mangalistDocuments = gql`
  query mangaList {
    Page(page: 1, perPage: 10) {
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

export const singleMangaList = gql`
  query manga($id: Int) {
    Media(id: $id, type: MANGA) {
      id
      title {
        romaji
        english
        native
      }
      characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID]) {
        edges {
          id
          role
          name
          voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
            id
            name {
              userPreferred
            }
            language: languageV2
            image {
              large
            }
          }
          node {
            id
            name {
              userPreferred
            }
            image {
              large
            }
          }
        }
      }
      staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
        edges {
          id
          role
          node {
            id
            name {
              userPreferred
            }
            language: languageV2
            image {
              large
            }
          }
        }
      }
      studios {
        edges {
          isMain
          node {
            id
            name
            siteUrl
          }
        }
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
