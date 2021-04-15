import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from '../Text'
import theme from '../../theme';

const styles = StyleSheet.create({
    bottom: {
        paddingBottom: Constants.statusBarHeight,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        //
        backgroundColor: theme.colors.primaryTheme,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

const AppBarBottom = () => {
    return (
        <View style={styles.bottom}>
                <Text color="theme">Notes</Text>
                <Text color="theme">Videos</Text>
                <Text color="theme">Books</Text>
                <Text color="theme">Podcast</Text>
        </View>
    )
};

export default AppBarBottom;