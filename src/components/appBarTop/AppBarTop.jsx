import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from '../Text'
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
    //    paddingTop: Constants.statusBarHeight,
        paddingLeft: 15,
        backgroundColor: theme.colors.primaryTheme,       
    //    alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        // ...
    },
});

const AppBarTop = () => {
    return (
        <View style={styles.container}>
            <Text fontWeight="bold" fontSize="subheading" color="theme">NOTES</Text>
        </View>
    )};

export default AppBarTop;