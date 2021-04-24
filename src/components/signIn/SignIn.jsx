import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm'
import useSignIn from '../../hooks/user/useSignIn';

const initialValues = {
    userName: '',
    password: '',
};

const validationSchema = yup.object().shape({
    userName: yup
        .string()
        .min(3, 'Username must be longer than 3')
        .required('Username is required'),
    password: yup
        .string()
        .min(3, 'Password must be longer than 3')
        .required('Password is required'),
});

const SignIn = () => {
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const username = values.userName;
        const password = values.password;

        try {
            await signIn({ username, password });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;