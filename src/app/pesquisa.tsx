import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

interface Profile {
  id: string;
  name: string;
  imageUrl: string;
}

const profiles: Profile[] = [
  { id: '1', name: 'Maria', imageUrl: 'https://example.com/maria.jpg' },
  { id: '2', name: 'Alice', imageUrl: 'https://example.com/alice.jpg' },
  { id: '3', name: 'Clara', imageUrl: 'https://example.com/clara.jpg' } // aqui mudar, botar as imagens
];

const App: React.FC = () => {
  const [search, setSearch] = React.useState('');

  const filteredProfiles = profiles.filter(profile => 
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <Text style={styles.headerText}>ENCONTRE O ATENDIMENTO MAIS PERTO DE VOCÊ...</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Digite seu email..."
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <FlatList
        data={filteredProfiles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.profileContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.profileImage} />
            <Text style={styles.profileName}>{item.name}</Text>
            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileButtonText}>VER PERFIL</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007B7A',
    padding: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  profileContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  profileButton: {
    backgroundColor: '#CFCFCF',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  profileButtonText: {
    color: '#007B7A',
    fontWeight: 'bold',
  },
});