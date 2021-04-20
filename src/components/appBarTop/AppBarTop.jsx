import React from 'react';
import { Link } from 'react-router-native';
import { Alert } from 'react-native';
import View from '../View'
import Text from '../Text'

const AppBarTop = () => {
    return (
        <View style='appBarTop'>
            <Link to='/signin'>
                <Text>LogOut</Text>
            </Link>            
            <Text fontWeight="bold" fontSize="subheading" color="theme">NOTES</Text>     
            <Link to='/createnote'>
                <Text>Add</Text>
            </Link> 
        </View>
    )
};

export default AppBarTop;