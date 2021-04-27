//import React from 'react';
import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import FormikTextInput from '../FormikTextInput';
import { useField } from 'formik';

import Button from '../Button';
import View from '../View'
import Text from '../Text'

const styles = StyleSheet.create({
    keyboardAvoiding: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

const CreateNoteForm = ({ onSubmit }) => {
    const [booleanValue, setBooleanValue] = React.useState('false');
    //this is only for 'important' TextInput because it is connected with RadioButton
    const [field, meta, helpers] = useField('important');

    const setRadioValue = (value) => {
        helpers.setValue(value)
        setBooleanValue(value)
    }
    
    return (
        <View style='formContainer'>
            <KeyboardAvoidingView
                style={styles.keyboardAvoiding} behavior="padding"
                enabled keyboardVerticalOffset={50}
            >
                <ScrollView keyboardShouldPersistTaps={'handled'}>
                    <Text fontSize="subheading">Title</Text>
                    <View style='formCircle'>
                        <FormikTextInput name="title" placeholder="" />
                    </View>
                    <View style='formPadding' />

                    <Text fontSize="subheading">Text</Text>
                    <View style='formCircle' >
                        <FormikTextInput name='text' placeholder='' />
                    </View>
                    <View style='formPadding' />

                    <Text fontSize="subheading">Url</Text>
                    <View style='formCircle'>
                        <FormikTextInput name='url' placeholder='' />
                    </View>
                    <View style='formPadding' />
                    <RadioButton.Group value={booleanValue} onValueChange={value => setRadioValue(value)}>
                        <RadioButton.Item label="Not important" value="false" />
                        <RadioButton.Item label="Important" value="true" />
                    </RadioButton.Group>
                    <View style='formPadding' />
                    <Button onPress={onSubmit} style='text' title='Make a Note' />
                    <View style='formPadding' />
                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    );
};

export default CreateNoteForm;