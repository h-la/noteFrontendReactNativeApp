import React from 'react';
import { Link } from 'react-router-native';
import View from '../View'
import Text from '../Text'

const AppBarBottom = () => {
    return (
        <View style='bottomNavigationBar'>
            <Link to='/notelist'>
                <Text color="theme">Notes</Text>
            </Link>
               
            <Text color="theme">Videos</Text>
            <Text color="theme">Books</Text>
            <Text color="theme">Podcast</Text>
        </View>
    )
};

export default AppBarBottom;