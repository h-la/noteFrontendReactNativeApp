import React from 'react';
import { Image as NativeImage, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    tintColor: theme.colors.textPrimary,
  },
  imageActivated: {
    width: 45,
    height: 45,
    tintColor: theme.colors.textTheme,
  },
});

const Image = ({ style, source }) => {
  const imageStyle = [
    style === 'image' && styles.image,
    style === 'imageActivated' && styles.imageActivated,
  ];

  return <NativeImage source={source} style={imageStyle} />;
};

export default Image;