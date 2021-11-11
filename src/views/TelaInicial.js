import React from "react";
import {StyleSheet, ScrollView } from 'react-native';
import Componente from "../components/Componente";

export default () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Componente />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});