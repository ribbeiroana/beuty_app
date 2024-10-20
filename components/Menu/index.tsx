import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Menu() {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={24} style={styles.icon} />
      <Fontisto name="search" size={24} style={styles.icon}/>
      <FontAwesome5 name="user-alt" size={24} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Adicionado para fixar o menu
    bottom: 0, // Coloca o menu na parte inferior
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#008584',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  icon: {
    color: 'white',
    padding: 10,
  },
});
