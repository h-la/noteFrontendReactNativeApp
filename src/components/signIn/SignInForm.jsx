import React from 'react';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

import View from '../View'
import Text from '../Text'

const SignInForm = ({ onSubmit }) => {
    return (
        
            <View style='signInformContainer'>
                <Text fontSize="subheading">User name</Text>
                <View style='formCircle'>
                    <FormikTextInput multiline={false} name="userName" placeholder="" />
                </View>
                <View style='formPadding' />
                <Text fontSize="subheading">Password</Text>
                <View style='formCircle'>
                    <FormikTextInput multiline={false} secureTextEntry={true} name="password" placeholder="" />
                </View>
                <View style='formPadding' />
                <Button onPress={onSubmit} style='text' title='Sign in' />
                <View style='formPadding' />
            </View >
    );
};

export default SignInForm;