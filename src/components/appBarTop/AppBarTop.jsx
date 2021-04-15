import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        // ...
    },
    // ...
});

const AppBarTop = () => {
    return (
        <View style={styles.container}>
            <Text>Note application</Text>
        </View>
    )};

export default AppBarTop;