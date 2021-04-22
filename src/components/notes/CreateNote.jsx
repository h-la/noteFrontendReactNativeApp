import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import useCreateNote from '../../hooks/notes/useCreateNote';
import { useHistory } from 'react-router-native';
import CreateNoteForm from './CreateNoteForm'

const initialValues = {
    title: '',
    text: '',
    url: '',
    important: '',
};

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

const CreateNote = () => {
    const [createNote] = useCreateNote();
    const history = useHistory();

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
            {({ handleSubmit }) => <CreateNoteForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default CreateNote;