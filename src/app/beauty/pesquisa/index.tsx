import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location'; // Importar o Expo Location

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [location, setLocation] = useState(null); // Para armazenar a localização do usuário
  const router = useRouter();

  // Função para obter a localização atual
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync(); // Solicitar permissão de localização
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Não foi possível acessar a sua localização.');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords); // Salvar as coordenadas
    } catch (error) {
      console.error('Erro ao obter a localização:', error);
      Alert.alert('Erro', 'Não foi possível obter a localização.');
    }
  };

  useEffect(() => {
    // Chama a função de localização quando o componente é montado
    getLocation();

    const fetchSalons = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
          Alert.alert('Erro', 'Token de autenticação não encontrado.');
          return;
        }

        const response = await fetch('https://beauty-api-private.onrender.com/saloes', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSalons(data);
      } catch (error) {
        console.error('Erro ao buscar salões:', error);
        Alert.alert('Erro', 'Não foi possível buscar os salões.');
      } finally {
        setLoading(false);
      }
    };

    fetchSalons();
  }, []);

  // Função para calcular a distância entre duas coordenadas
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Retorna a distância em km
  };

  const filteredSalons = salons.filter(salon => {
    if (!location) return true; // Se não tivermos a localização, exibe todos os salões

    const salonCoords = salon.coords; // Supondo que os salões tenham coordenadas (latitude, longitude)
    if (!salonCoords) return true; // Caso não tenha coordenadas, exibe o salão

    const distance = calculateDistance(location.latitude, location.longitude, salonCoords.latitude, salonCoords.longitude);
    return distance <= 5; // Filtra os salões até 5 km de distância
  });

  const handleSalonPress = async (id) => {
    if (id === undefined) {
      Alert.alert('Erro', 'ID do salão não encontrado.');
      return;
    }

    try {
      await AsyncStorage.setItem('selectedSalonId', id.toString());
      router.push('/detalhes');
    } catch (error) {
      console.error('Erro ao armazenar o ID do salão:', error);
      Alert.alert('Erro', 'Não foi possível armazenar o ID do salão.');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
        <Text style={styles.loadingText}>Carregando salões...</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={filteredSalons}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={() => (
        <>
          <Text style={styles.headerText}>ENCONTRE O ATENDIMENTO MAIS PERTO DE VOCÊ...</Text>
          
          <TextInput
            style={styles.searchInput}
            placeholder="Digite o endereço do salão..."
            placeholderTextColor="#777777"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </>
      )}
      renderItem={({ item }) => (
        <View style={styles.salonContainer}>
          <Image source={{ uri: item.logo }} style={styles.salonImage} />
          <View style={styles.salonInfo}>
            <Text style={styles.salonName}>{item.nome}</Text>
            <Text style={styles.salonAddress}>{item.endereco}</Text>
          </View>
          <TouchableOpacity 
            style={styles.salonButton} 
            onPress={() => handleSalonPress(item.id)}
          >
            <Text style={styles.salonButtonText}>VER DETALHES</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#007B7A',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007B7A',
  },
  loadingText: {
    color: '#FFFFFF',
    marginTop: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 20,
    marginTop: 50,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#333333',
    fontSize: 16,
  },
  salonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  salonImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  salonInfo: {
    flex: 1,
  },
  salonName: {
    fontSize: 16,
    color: '#333333',
  },
  salonAddress: {
    fontSize: 14,
    color: '#777777',
  },
  salonButton: {
    backgroundColor: '#CFCFCF',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  salonButtonText: {
    color: '#007B7A',
    fontWeight: 'bold',
  },
});
