import React from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import FormikTextInput from '../FormikTextInput';
import { useField } from 'formik';
import { useParams } from 'react-router-native';
import { useHistory } from 'react-router-native';

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

const UpdateNoteForm = ({ onSubmit }) => {
    //this is only for 'important' TextInput because it is connected with RadioButton
    const { id } = useParams();
    const [field, meta, helpers] = useField('important');
    const [booleanValue, setBooleanValue] = React.useState(field.value);
    const history = useHistory();

    const setRadioValue = (value) => {
        helpers.setValue(value)
        setBooleanValue(value)
    }

    const toSingleNoteView = () => {
        history.push(`/notelist/${id}`);
    };

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
                    <RadioButton.Group value={booleanValue} onValueChange={value => setRadioValue(value)} >
                        <RadioButton.Item label="Not important" value="false" />
                        <RadioButton.Item label="Important" value="true" />
                    </RadioButton.Group>
                    <View style='formPadding' />
                    <View style='buttonContainer'>
                        <Button onPress={toSingleNoteView} style='text' title='Back' />
                        <Button onPress={onSubmit} style='text' title='Save' />
                    </View>
                    <View style='formPadding' />
                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    );
};

export default UpdateNoteForm;