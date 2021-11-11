import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';


export default () => {
  return(
    <Header
      placement="left"
      leftComponent={{ icon: 'menu', color: 'orange' }}
      centerComponent={{ text: 'Mapa', style: { color: 'orange', fontSize: 20 } }}
      rightComponent={{ icon: 'map', color: 'orange', size: 30 }}
      containerStyle={{
        backgroundColor: 'white',
      }}
    />
  );
};

const styles = StyleSheet.create({
  
});

