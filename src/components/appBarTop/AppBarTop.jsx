import React from 'react';
import { Pressable, Image } from 'react-native';
import { Link } from 'react-router-native';
import { useHistory } from 'react-router-native';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

import View from '../View'
import Text from '../Text'

import createNewNote from '../../../assets/create.png'

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
    //<Text>Add</Text>

    return (
        <View style='appBarTop'>
            <Pressable onPress={logOut}>
                <Text>Sign Out</Text>
            </Pressable>
            <Text fontWeight="bold" fontSize="subheading" color="theme">NOTES</Text>
            <Link to='/createnote'>              
                <Image source={createNewNote} style={{ width: 30, height: 30 }} /> 
            </Link>

        </View>
    )
};

export default AppBarTop;