import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('@/assets/images/logo.png')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008584',
    height: '100%',
  },
  image: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},
})