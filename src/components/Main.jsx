import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';

import AppBarTop from './appBarTop/AppBarTop'
import NoteList from './notes/NoteList';
import AppBarBottom from './BottomNavigationBar/BottomNavigationBar'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
      <View style={styles.container}>
        
        <AppBarTop />
        <NoteList />
        <AppBarBottom />
      </View>
  );
};

export default Main;