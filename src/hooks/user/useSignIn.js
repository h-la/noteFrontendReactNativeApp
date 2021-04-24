import { useMutation, useApolloClient } from '@apollo/client';
import { LOG_IN } from '../../graphql/user/mutations';
import { useHistory } from 'react-router-native';
import useAuthStorage from '../useAuthStorage';

const useSignIn = () => {
    const [mutate, result] = useMutation(LOG_IN);
    const history = useHistory();
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { username, password } });
        await authStorage.setAccessToken(data.login.value);
        apolloClient.resetStore();
        history.push('/notelist');
    };

    return [signIn, result];
};

export default useSignIn;
