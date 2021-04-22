import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textTheme,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        fontFamily: theme.fonts.main,
        backgroundColor: theme.colors.primaryTheme,
        borderRadius: 15, //5
        padding: 10,
        textAlign: 'center',
    },
}
);

const Button = ({ style, onPress, title }) => {
    const viewStyle = [
        style === 'text' && styles.text,
    ];

    return (
        <View>
            <Pressable onPress={onPress}>
                <Text style={viewStyle}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default Button;