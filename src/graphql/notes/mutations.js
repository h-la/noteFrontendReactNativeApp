import { gql } from '@apollo/client';

export const DELETE_NOTE = gql`
  mutation deleteNote( $id: ID! ) {
    deleteNote(id: $id) {
        title
      }
  }
`;