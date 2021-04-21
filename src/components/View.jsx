import React from 'react';
import { View as NativeView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
    appBarTop: {
        //    paddingTop: Constants.statusBarHeight,
        //    paddingLeft: 15,
        backgroundColor: theme.colors.primaryTheme,
        //    alignItems: 'center',
        flexDirection: 'row',
    //    justifyContent: 'center',
        justifyContent: 'space-around',
    },
    mainContainer: {
        marginTop: Constants.statusBarHeight,
        paddingBottom: 65,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.backgroundColor,
    },
    container: {
        padding: 10,
        paddingRight: 5,      
        flexDirection: 'row',
        backgroundColor: 'transparent',
    //    justifyContent: 'center',
    //    alignItems: 'center',
    },
    subContainer: {
        flexGrow: 1,
        flexShrink: 1,
        //    paddingLeft: 15,
        padding: 15,
        borderRadius: 15,
        borderColor: theme.colors.primaryTheme,
        backgroundColor: theme.colors.textTheme,
        borderWidth: 2,
    },
    buttonContainer: {
        flexGrow: 1,
        flexShrink: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },    
    centralizeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    formContainer: {
        padding: 15,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: 'white',
    },
    formCircle: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    //    borderColor: theme.colors.primaryTheme,
    },
    formPadding: {
        paddingBottom: 20,
    },
    bottomNavigationBar: {
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
    separator: {
        height: 10,
        backgroundColor: 'transparent',
    },
}
);

const View = ({ height, style, ...props }) => {
    const viewStyle = [
        style === 'appBarTop' && styles.appBarTop,
        style === 'mainContainer' && styles.mainContainer,
        style === 'container' && styles.container,
        style === 'subContainer' && styles.subContainer,
        style === 'buttonContainer' && styles.buttonContainer,
        style === 'centralizeContainer' && styles.centralizeContainer,
        style === 'formContainer' && styles.formContainer,
        style === 'formCircle' && styles.formCircle,
        style === 'formPadding' && styles.formPadding,
        style === 'bottomNavigationBar' && styles.bottomNavigationBar,
        style === 'separator' && styles.separator,
    ];

    return <NativeView style={viewStyle} {...props} />;
};

export default View;