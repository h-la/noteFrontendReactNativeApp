import React, { useState, useEffect } from 'react';
import { Pressable } from 'react-native';
import { Link } from 'react-router-native';
import { useHistory, useLocation } from 'react-router-native';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

import Menu from './Menu'
import View from '../View'
import Text from '../Text'
import Image from '../Image'

import createNewNote from '../../../assets/create.png'

const AppBarTop = () => {
    const [title, setTitle] = useState('NOTES')
    const apolloClient = useApolloClient();
    const history = useHistory();
    const location = useLocation();
    const authStorage = useAuthStorage();

    useEffect(() => {
        if (location.pathname === '/notelist') {
            setTitle('NOTES')
        }
        if (location.pathname === '/booklist') {
            setTitle('BOOKS')
        }
        if (location.pathname === '/podcastlist') {
            setTitle('PODCASTS')
        }
        if (location.pathname === '/videolist') {
            setTitle('VIDEOS')
        }
    });

    const logOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        history.push('/signin');
    };

    return (
        <View style='appBarTop'>
      
            <Menu></Menu>
         
            <Pressable onPress={logOut}>
                <Text>log out</Text>
            </Pressable>
            <Text fontWeight="bold" fontSize="subheading" color="theme">{title}</Text>
            <Link to='/createnote'>
                <Image source={createNewNote} style='topAppBarImage' />
            </Link>
          
        </View>
    )
};

export default AppBarTop;