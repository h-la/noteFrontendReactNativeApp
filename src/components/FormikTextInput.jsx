import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a',
    fontSize: 20,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  // Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error;

  // {showError && <Text style={styles.errorText}></Text>}

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        multiline={true}
        {...props}
      />   
    </>
  );
};

export default FormikTextInput;