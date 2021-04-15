import React from 'react';
import { View as NativeView, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    subContainer: {
        flexGrow: 1,
        flexShrink: 1,
        paddingLeft: 15,
    },
    subSubContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    subSubSubContainer: {
        flexGrow: 1,
        flexShrink: 1,
        paddingLeft: 15,
        alignItems: 'center',
    },
    separator: {
        height: 10,
    },
}
);

const View = ({ height, style, ...props }) => {
    const viewStyle = [
        style === 'container' && styles.container,
        height === 'separator' && styles.separator,
    ];

    return <NativeView style={viewStyle} {...props} />;
};

export default View;