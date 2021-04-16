import React from 'react';
import { useParams } from 'react-router-native';

import View from '../View'
import Text from '../Text'

import useSingleNote from '../../hooks/useSingleNote';

const SingleNote = () => {
    const { id } = useParams();
    const note = useSingleNote({ noteToSearch: id });

    if (note.loading) {
        return <Text>loading...</Text>
    }

    if (note.error) {
        return <Text>error</Text>
    }

    console.log("hurraa", note.data.findNote)

    return (
        <View style='container'>
            <View style='subContainer'>
                <Text fontWeight="bold" fontSize="subheading">{note.data.findNote.title}</Text>
                <Text color="textSecondary">{note.data.findNote.text}</Text>
                <Text color="textSecondary">{note.data.findNote.url}</Text>
            </View>
        </View>
    )
}

export default SingleNote;