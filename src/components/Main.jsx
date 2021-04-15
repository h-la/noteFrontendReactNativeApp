import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';

//components
import NoteList from './notes/NoteList';

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
      <Text>Note application</Text>
      <NoteList />
    </View>
  );
};

export default Main;