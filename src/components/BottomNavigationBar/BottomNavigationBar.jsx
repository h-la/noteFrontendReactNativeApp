import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },
    // ...
});

const AppBarBottom = () => {
    return (
        <View style={styles.bottom}>
            <Text>Note application</Text>
            <Text>Note application</Text>
        </View>
    )};

export default AppBarBottom;