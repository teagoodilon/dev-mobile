import React from "react";
import {StyleSheet, ScrollView, Image } from 'react-native';
import cleito from './src/assets/home/cleito.jpeg';

export default () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={cleito} style={{
        width: '100%',
        height: '100%',
      }}
      >
      </Image>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});