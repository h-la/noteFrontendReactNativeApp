import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import useNotes from '../../hooks/useNotes';
import NoteItem from './NoteItem'

import View from '../View'

const ItemSeparator = () => <View height='separator' />;

const NoteList = () => {
  const notes = useNotes()

  if (notes.loading) {
    return <Text>loading...</Text>
  }

  if (notes.error) {
    return <Text>error</Text>
  }

  return (
    <View style='container'>
      <FlatList
        keyExtractor={(item) => item.id}
        data={notes.data.allNotes.map(p => p)}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <NoteItem item={item} />
        )}
      />
    </View>
  );
};

export default NoteList;