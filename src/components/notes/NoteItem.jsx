import React from 'react';
import { Pressable, Alert } from 'react-native';
import View from '../View'
import Text from '../Text'

const NoteItem = props => {
    const toSingleRepositoryView = (id) => {
      Alert.alert(`you pressed the text ${id}`)
    };

    return (
        <Pressable onPress={() => toSingleRepositoryView(props.item.id)}>
            <View style='subContainer'>
                <Text fontWeight="bold" fontSize="subheading">{props.item.title}</Text>
                <Text color="textSecondary">{props.item.text}</Text>
                <Text color="textSecondary">{props.item.url}</Text>
            </View>
        </Pressable>
    );
};

export default NoteItem;