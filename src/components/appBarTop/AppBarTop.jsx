import React from 'react';
import { Pressable } from 'react-native';
import { Link } from 'react-router-native';
import { useHistory } from 'react-router-native';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

import View from '../View'
import Text from '../Text'

const AppBarTop = () => {
    const apolloClient = useApolloClient();
    const history = useHistory();
    const authStorage = useAuthStorage();
    /*
       <Link to='/signin'>
            <Text>LogOut</Text>
        </Link>   
    */

    const logOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        history.push('/signin');
    };

    return (
        <View style='appBarTop'>
            <Pressable onPress={logOut}>
                <Text>Sign Out</Text>
            </Pressable>
            <Text fontWeight="bold" fontSize="subheading" color="theme">NOTES</Text>
            <Link to='/createnote'>
                <Text>Add</Text>
            </Link>
        </View>
    )
};

export default AppBarTop;