import React from 'react';
import { FlatList } from 'react-native';
import useNotes from '../../hooks/notes/useNotes';
import NoteItem from './NoteItem'

import View from '../View'
import Text from '../Text'
import PickerSelect from '../PickerSelect';

const ItemSeparator = () => <View style='separator' />;

const NoteList = () => {
   const notes = useNotes()

  if (notes.loading) {
    return <Text>loading...</Text>
  }

  if (notes.error) {
    return <Text>error</Text>
  }

  return (
    <View>
      <PickerSelect/>
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
    </View>
  );
};

export default NoteList;