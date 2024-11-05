import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para buscar os salões favoritos da API
  const buscarFavoritos = async () => {
    if (!token) return;

    try {
      const response = await fetch('https://beauty-api-private.onrender.com/favoritos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        Alert.alert('Erro', data.message || 'Erro ao buscar salões favoritos.');
        return;
      }

      const data = await response.json();
      setFavoritos(data);
      setLoading(false);
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar buscar os salões favoritos.');
      console.error(error);
    }
  };

  // Função para remover um salão dos favoritos
  const removerFavorito = async (salaoId) => {
    try {
      const response = await fetch(`https://beauty-api-private.onrender.com/favoritos/${salaoId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('Erro', data.message || 'Erro ao remover salão dos favoritos.');
        return;
      }

      // Atualiza a lista de favoritos
      setFavoritos(favoritos.filter(favorito => favorito.id !== salaoId));
      Alert.alert('Sucesso', 'Salão removido dos favoritos com sucesso.');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar remover o salão dos favoritos.');
      console.error(error);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken');
        setToken(storedToken);
      } catch (error) {
        console.error('Erro ao recuperar os dados do usuário:', error);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    if (token) {
      buscarFavoritos(); // Chama a função ao montar o componente, se o token estiver disponível
    }
  }, [token]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ecf3f3" />
        <Text style={styles.loadingText}>Carregando favoritos...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Salões Favoritos</Text>
        </View>

        <View style={styles.imagemContainer}>
          <Image 
            source={require('@/assets/images/designEstrela.png')} // Ajuste o caminho da imagem
            style={styles.estrelaImagem} 
          />
        </View>

        {favoritos.length === 0 ? (
          <Text style={styles.semFavoritos}>Nenhum salão favorito encontrado.</Text>
        ) : (
          favoritos.map((salao) => (
            <View key={salao.id} style={styles.itensFavoritos}>
              <Text style={styles.textoNome}>{salao.nome}</Text>
              <Text style={styles.textoEndereco}>{salao.endereco}</Text>
              <Pressable onPress={() => removerFavorito(salao.id)} style={styles.removerButton}>
                <Text style={styles.removerTexto}>REMOVER</Text>
                <FontAwesome6 name="trash-can" size={15} style={styles.removerIcon} />
              </Pressable>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008584',
    padding: 20,
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008584',
  },
  loadingText: {
    color: 'white',
    marginTop: 10,
  },
  card: {
    height: 80,
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderWidth: 0,
    backgroundImage: 'linear-gradient(160deg, #008584 0%, #caffed 100%)',
  },
  titulo: {
    fontWeight: '800',
    fontSize: 25,
    color: '#ffffff',
    fontFamily: 'Roboto',
    textAlign: 'center', // Centraliza o texto (removendo o uppercase)
  },
  imagemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  estrelaImagem: {
    width: 50,
    height: 50,
  },
  itensFavoritos: {
    backgroundColor: 'transparent',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#008584',
    backgroundImage: 'linear-gradient(160deg, #008584 0%, #caffed 100%)',
  },
  textoNome: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,  // Alinhando à esquerda
  },
  textoEndereco: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,  // Alinhando à esquerda
  },
  removerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    borderRadius: 5,
    // borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#31a1a1',
    marginTop: 10,
    alignSelf: 'flex-start', // Alinha o botão à esquerda
    marginLeft: 10,  // Alinha o botão à esquerda
  },
  removerTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginRight: 5,
  },
  removerIcon: {
    color: '#ffffff',
  },
  semFavoritos: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
