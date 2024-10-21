import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';


export default function Pesquisa() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text></Text>
        <Link href={'/salao'}>Ir para salão</Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008584',
    height: '100%',
  },

})