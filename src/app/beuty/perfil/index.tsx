import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView, Alert } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [token, setToken] = useState(null);
  const [nomeUsuario, setNomeUsuario] = useState('');

  // Função para buscar os agendamentos da API
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
        return;
      }

      const data = await response.json();
      setAgendamentos(data);
      console.log(data);

    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar buscar os agendamentos.');
      console.error(error);
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
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('Erro', data.message || 'Erro ao excluir agendamento.');
        return;
      }

      // Atualiza a lista de agendamentos
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
        const storedNome = await AsyncStorage.getItem('userName'); // Armazene o nome no AsyncStorage após login
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
      buscarAgendamentos(); // Chama a função ao montar o componente, se o token estiver disponível
    }
  }, [token]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.usuario}>{nomeUsuario || 'Nome Usuário'}</Text>
        </View>

        <View style={styles.imagemContainer}>
          <Image 
            source={require('@/assets/images/designEstrela.png')} // Ajuste o caminho da imagem
            style={styles.estrelaImagem} 
          />
          <Text style={styles.tituloHistorico}>Histórico de Agendamento</Text>
        </View>

        {agendamentos.map((item) => (
          <Pressable key={item.id} style={styles.itensAgendados}>
            <View style={styles.itensContainer}>
              <Text style={styles.textoServico}>Serviço: {item.servico.nome}</Text>
              {/* <Text style={styles.textoSalão}>Salão: {item.nome}</Text> */}
              <Text style={styles.textoValor}>Valor: {item.servico.valor}</Text>
              <View style={styles.excluirContainer}>
                <Pressable onPress={() => confirmarExclusao(item.id)} style={styles.excluirButton}>
                  <Text style={styles.excluirAgendamento}>EXCLUIR</Text>
                  <FontAwesome6 name="trash-can" size={15} style={styles.excluirIcon} />
                </Pressable>
              </View>
            </View>
          </Pressable>
        ))}
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
  card: {
    backgroundColor: '#fff',
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
  },
  usuario: {
    fontWeight: '800',
    fontSize: 25,
    color: '#008584',
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
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
  itensContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textoServico: {
    color: '#0b0c0c',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textoSalão: {
    color: '#0b0c0c',
    fontSize: 14,
  },
  textoValor: {
    color: '#0b0c0c',
    fontSize: 14,
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#008584',
  },
  excluirAgendamento: {
    color: '#008584',
    fontWeight: 'bold',
    marginRight: 5,
  },
  excluirIcon: {
    color: '#008584',
  },
});
