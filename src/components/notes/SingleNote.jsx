import React from 'react';
import { useParams } from 'react-router-native';
import { useHistory } from 'react-router-native';

import useSingleNote from '../../hooks/notes/useSingleNote';
import useDeleteNote from '../../hooks/notes/useDeleteNote';

import View from '../View'
import Text from '../Text'
import Button from '../Button'

const SingleNote = () => {
    const { id } = useParams();
    const note = useSingleNote({ noteToSearch: id });
    const [deleteNote] = useDeleteNote();
    const history = useHistory();

    if (note.loading) {
        return <Text>loading...</Text>
    }

    if (note.error) {
        return <Text>error</Text>
    }

    const handleDeleteNote = async () => {
    //    console.log({ id })
        await deleteNote({ id })
        history.push('/notelist');
        //props.refetch();
    };

    const toUpdateView = () => {
        history.push(`/notelist/updatenote/${id}`);
    };

    return (
        <View>
            <View style='container'>
                <View style='subContainer'>
                    <View style='centralizeContainer'>
                        <Text fontWeight="bold" fontSize="subheading">{note.data.findNote.title}</Text>
                        <Text color="textSecondary">{note.data.findNote.text}</Text>
                        <Text color="textSecondary">{note.data.findNote.url}</Text>
                    </View>
                </View>
            </View>
            <View style='buttonContainer'>
                <Button onPress={handleDeleteNote} style='text' title='delete' />
                <Button onPress={toUpdateView} style='text' title='update' />
            </View>
        </View>
    )
}

export default SingleNote;