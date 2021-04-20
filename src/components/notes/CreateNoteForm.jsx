import React from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import FormikTextInput from '../FormikTextInput';

import Button from '../Button';
//import View from '../View'
import Text from '../Text'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: 'white',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#0366d6',
        borderRadius: 5,
        padding: 20,
        textAlign: 'center',
    },
    circle: {
        //    flex: 0.3,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    padding: {
        paddingBottom: 20,
    },
});

const CreateNoteForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={{
                    flex: 1, flexDirection: 'column',
                    justifyContent: 'center',
                }} behavior="padding"
                enabled keyboardVerticalOffset={50}
            >
                <ScrollView>
                    <Text fontSize="subheading">Title</Text>
                    <View style={styles.circle}>
                        <FormikTextInput name="title" placeholder="" />
                    </View>
                    <View style={styles.padding} />

                    <Text fontSize="subheading">Text</Text>
                    <View style={styles.circle} >
                        <FormikTextInput name='text' placeholder='' />
                    </View>
                    <View style={styles.padding} />

                    <Text fontSize="subheading">Url</Text>
                    <View style={styles.circle}>
                        <FormikTextInput name='url' placeholder='' />
                    </View>
                    <View style={styles.padding} />

                    <Text fontSize="subheading">Important</Text>
                    <View style={styles.circle}>
                        <FormikTextInput name='important' placeholder='' />
                    </View>
                    <View style={styles.padding} />

                    <View style={styles.padding} />

                    <Button onPress={onSubmit} style='text' title='Make a Note' />

                    <View style={styles.padding} />

                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    );
};

export default CreateNoteForm;