import { gql } from '@apollo/client';

export const CREATE_NOTE = gql`
  mutation createNote(
    $title: String!
    $text: String
    $url: String
    $important: Boolean
  ) {
    addNote(title: $title, text: $text, url: $url, important: $important) {
      title
      text
      url
      important
      id
      }
    }
`;

export const DELETE_NOTE = gql`
  mutation deleteNote( $id: ID! ) {
    deleteNote(id: $id) {
        title
      }
  }
`;