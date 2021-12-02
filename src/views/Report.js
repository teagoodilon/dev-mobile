import React from "react";
import {StyleSheet, ScrollView } from 'react-native';

export default () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>TO na Report</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});