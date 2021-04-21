import React from 'react';
import { useParams } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useCreateNote from '../../hooks/notes/useCreateNote';
import { useHistory } from 'react-router-native';
import UpdateNoteForm from './UpdateNoteForm'

import useSingleNote from '../../hooks/notes/useSingleNote';
import Text from '../Text'

const validationSchema = yup.object().shape({
    title: yup
        .string(),
    text: yup
        .string(),
    url: yup
        .string(),
    important: yup
        .bool(),
});

const UpdateNote = () => {
    const { id } = useParams();
    const note = useSingleNote({ noteToSearch: id });

    const [createNote] = useCreateNote();
    const history = useHistory();

    if (note.loading) {
        return <Text>loading...</Text>
    }

    if (note.error) {
        return <Text>error</Text>
    }

    const initialValues = {
        title: note.data.findNote.title,
        text: note.data.findNote.text,
        url: note.data.findNote.url,
        important: String(note.data.findNote.important),
    };

    const onSubmit = async (values) => {
        const title = values.title;
        const text = values.text;
        const url = values.url;
        let important = values.important || false;

        if (important === 'true') {
            important = true
        }
        if (important === 'false') {
            important = false
        }

        console.log(`title: ${title}, text: ${text}, url: ${url}, important: ${important}`);
        try {
            await createNote({ title, text, url, important });
            history.push('/notelist');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <UpdateNoteForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default UpdateNote;