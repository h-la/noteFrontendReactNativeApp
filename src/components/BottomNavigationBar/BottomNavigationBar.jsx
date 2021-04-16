import React from 'react';
import View from '../View'
import Text from '../Text'

const AppBarBottom = () => {
    return (
        <View style='bottomNavigationBar'>
                <Text color="theme">Notes</Text>
                <Text color="theme">Videos</Text>
                <Text color="theme">Books</Text>
                <Text color="theme">Podcast</Text>
        </View>
    )
};

export default AppBarBottom;