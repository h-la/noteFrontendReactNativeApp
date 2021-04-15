import {
    ApolloClient, HttpLink, InMemoryCache
} from '@apollo/client'
import Constants from 'expo-constants';

const apolloUri = Constants.manifest.extra.uri;

const createApolloClient = () => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: apolloUri,
        })
    })
    return client
};

export default createApolloClient;