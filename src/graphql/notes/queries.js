import { gql } from '@apollo/client';

const NOTE_DETAILS = gql`
  fragment noteDetails on Note {
    title
    text
    url
    important
    id
  }
`;


export const GET_NOTES = gql`
  query {
    allNotes {
      ...noteDetails
    }
  }
  ${NOTE_DETAILS}
`;

export const GET_NOTE = gql`
  query ($noteToSearch: ID!) {
    findNote(id: $noteToSearch) {
      ...noteDetails
    }
  }
  ${NOTE_DETAILS}
`;