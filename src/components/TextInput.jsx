import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
},
});

const TextInput = ({ style, error, ...props }) => {
//  const textInputStyle = [style];

  return <NativeTextInput style={styles.text}  {...props} />;
};

export default TextInput;