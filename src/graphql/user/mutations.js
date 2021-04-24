import { gql } from '@apollo/client';

export const LOG_IN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          value   
        }
    }

`;
