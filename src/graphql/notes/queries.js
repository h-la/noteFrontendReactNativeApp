import { gql } from '@apollo/client';

export const GET_NOTES = gql`
    query {
        allNotes {
          title
          text
          url
          important
          id
        }
      }
`;