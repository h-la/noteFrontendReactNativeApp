import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
//import Text from './Text';
//import useCreateReview from '../hooks/useCreateReview';
//import { useHistory } from 'react-router-native';
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
    //  const [createReview] = useCreateReview();
    //  const history = useHistory();

    const onSubmit = async (values) => {
        const title = values.title;
        const text = values.text;
        const url = values.url;
        const important = values.important;

        console.log(`title: ${title}, text: ${text}, url: ${url}, important: ${important}`);
        //  try {
        //      const { data } = await createReview({ repoOwnerName, repoName, rating, review });
        //      console.log("appila", data);
        //      if (data.createReview.repositoryId) {
        //          history.push(`/${data.createReview.repositoryId}`);
        //      }
        //  } catch (e) {
        //      console.log(e);
        //  }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <CreateNoteForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default CreateNote;