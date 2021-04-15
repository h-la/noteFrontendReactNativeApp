import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

import { Text } from 'react-native';

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.manifest.extra.env);

  return (
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
      </ApolloProvider>
      </NativeRouter>
  )
};

export default App;