import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

const TextInput = ({ style, error, ...props }) => {
  return <NativeTextInput style={styles.text}  {...props} />;
};

export default TextInput;