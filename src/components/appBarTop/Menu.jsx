//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { Pressable } from 'react-native';
import { Drawer } from 'react-native-paper';

import { useHistory } from 'react-router-native';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

import View from '../View'
import Image from '../Image'

import MenuImage from '../../../assets/menu.png'
import SearchImage from '../../../assets/search.png'
import logoutImage from '../../../assets/logout.png'

const Menu = () => {
    const [active, setActive] = useState('');

    const [expanded, setExpanded] = useState(false);

    const apolloClient = useApolloClient();
    const history = useHistory();
    const authStorage = useAuthStorage();

    useEffect(() => {
        setExpanded(true)
    }, []);

    const open = () => {
        setExpanded(!expanded)
    }

    const logOut = async () => {
        setExpanded(true)
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        history.push('/signin');
    };

    return (
        <View>

            {expanded
                ? <Pressable onPress={open}>
                    <Image source={MenuImage} style='topAppBarImage' />
                </Pressable>
                : <View style='popupMenu'>
                    <Drawer.Section title="Menu">
                        <Drawer.Item
                            label="hide menu"
                            onPress={open}
                        />
                        <Drawer.Item
                            icon={SearchImage}
                            label="Search"
                            active={active === 'second'}
                            onPress={() => setActive('second')}
                        />
                        <Drawer.Item
                            icon={logoutImage}
                            label="Logout"
                            onPress={logOut}
                        />
                    </Drawer.Section>
                </View>
            }

        </View>
    );
};

export default Menu;

