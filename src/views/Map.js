import React from "react";
import {StyleSheet, ScrollView } from 'react-native';

export default () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>TO no mapa</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});