import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
  const [agendamentos, setAgendamentos] = useState([]); 
  const [token, setToken] = useState(null);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 


  const buscarAgendamentos = async () => {
    if (!token) return;

    try {
      const response = await fetch('https://beauty-api-private.onrender.com/agendamentos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        Alert.alert('Erro', data.message || 'Erro ao buscar agendamentos.');
        setError(data.message || 'Erro ao buscar agendamentos.');
        return;
      }

      const data = await response.json();

 
      if (!Array.isArray(data)) {
        setError('Sem agendamentos.');
        setAgendamentos([]); 
      } else if (data.length === 0) {
        setError('Nenhum agendamento encontrado.');
        setAgendamentos([]); 
      } else {
        setAgendamentos(data);
        setError(null); 
      }

    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar buscar os agendamentos.');
      console.error(error);
      setError('Ocorreu um erro ao tentar buscar os agendamentos.');
      setAgendamentos([]); 
    } finally {
      setLoading(false); 
    }
  };

  const confirmarExclusao = (id) => {
    Alert.alert(
      "Confirmação",
      "Você realmente deseja excluir este agendamento?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: () => excluirAgendamento(id) }
      ]
    );
  };

  const excluirAgendamento = async (id) => {
    try {
      const response = await fetch(`https://beauty-api-private.onrender.com/agendamentos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({}) 
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('Erro', data.message || 'Erro ao excluir agendamento.');
        return;
      }

     
      setAgendamentos(agendamentos.filter(agendamento => agendamento.id !== id));
      Alert.alert('Sucesso', 'Agendamento excluído com sucesso.');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar excluir o agendamento.');
      console.error(error);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken');
        const storedNome = await AsyncStorage.getItem('userName'); 
        setToken(storedToken);
        setNomeUsuario(storedNome);
      } catch (error) {
        console.error('Erro ao recuperar os dados do usuário:', error);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    if (token) {
      setLoading(true); 
      buscarAgendamentos(); 
    }
  }, [token]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ecf3f3" />
        <Text style={styles.loadingText}>Carregando perfil...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.usuario}>{nomeUsuario || 'Nome Usuário'}</Text>
        </View>

        <View style={styles.imagemContainer}>
          <Image 
            source={require('@/assets/images/designEstrela.png')} 
            style={styles.estrelaImagem} 
          />
          <Text style={styles.tituloHistorico}>Histórico de Agendamento</Text>
        </View>

        {error ? (
          <Text style={styles.semAgendamentos}>{error}</Text> 
        ) : (
          agendamentos.map((item) => (
            <Pressable key={item.id} style={styles.itensAgendados}>
              <View style={styles.itensContainer}>
                <Text style={styles.textoServico}>Serviço: {item.servico.nome}</Text>
                <Text style={styles.textoValor}>Valor: R$ {item.servico.valor}</Text>
                <View style={styles.excluirContainer}>
                  <Pressable onPress={() => confirmarExclusao(item.id)} style={styles.excluirButton}>
                    <Text style={styles.excluirAgendamento}>EXCLUIR AGENDAMENTO</Text>
                    <FontAwesome6 name="trash-can" size={15} style={styles.excluirIcon} />
                  </Pressable>
                </View>
              </View>
            </Pressable>
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
    marginTop: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
    backgroundColor: '#007B7A',
  },
  usuario: {
    fontWeight: '800',
    fontSize: 25,
    color: '#ffffff',
    fontFamily: 'Roboto',
    textAlign: 'center', 
  },
  imagemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  tituloHistorico: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 10,
  },
  estrelaImagem: {
    width: 50,
    height: 50,
  },
  itensAgendados: {
    backgroundColor: 'transparent',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#008584',
    backgroundImage: 'linear-gradient(160deg, #008584 0%, #caffed 100%)',
  },
  itensContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textoServico: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
  textoValor: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  excluirContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  excluirButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
    marginTop: 10,
    alignSelf: 'flex-start', 
    marginLeft: 10, 
  },
  excluirAgendamento: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginRight: 5,
  },
  excluirIcon: {
    color: '#ffffff',
  },
  semAgendamentos: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});
