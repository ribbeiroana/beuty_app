import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable, Text, Image, Alert, ActivityIndicator } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const SalaoDetails = () => {
  const router = useRouter();
  const [salao, setSalao] = useState(null);
  const [servicos, setServicos] = useState([]);
  const [horariosVisiveis, setHorariosVisiveis] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState('');
  const [horariosSelecionados, setHorariosSelecionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingServicos, setLoadingServicos] = useState(true); // Estado para carregamento de serviços
  const [userId, setUserId] = useState(null);
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchSalaoDetails = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        const selectedSalonId = await AsyncStorage.getItem('selectedSalonId');

        if (!selectedSalonId) {
          Alert.alert('Erro', 'ID do salão não encontrado.');
          return;
        }

        // Obter detalhes do salão
        const response = await fetch(`https://beauty-api-private.onrender.com/salao/${selectedSalonId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar os detalhes do salão');
        }

        const data = await response.json();
        setSalao(data);
console.log(data);
        // Verificar se o salão é favorito
        const favoritosResponse = await fetch('https://beauty-api-private.onrender.com/favoritos', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const favoritosData = await favoritosResponse.json();
        setIsFavorito(favoritosData.some(f => f.salao.id === data.id));

        // Agora buscar os serviços do salão
        const servicosResponse = await fetch(`https://beauty-api-private.onrender.com/salao/${selectedSalonId}/servicos`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!servicosResponse.ok) {
          throw new Error('Erro ao buscar os serviços do salão');
        }

        const servicosData = await servicosResponse.json();
        setServicos(servicosData);
      } catch (error) {
        console.error('Erro ao buscar detalhes do salão:', error);
        Alert.alert('Erro', 'Não foi possível buscar os detalhes do salão.');
      } finally {
        setLoading(false);
      }
    };

    fetchSalaoDetails();
  }, []);

  useEffect(() => {
    if (salao) {
      setLoadingServicos(true); // Começa a carregar os serviços
      const fetchServicos = async () => {
        try {
          const token = await AsyncStorage.getItem('authToken');
          const selectedSalonId = await AsyncStorage.getItem('selectedSalonId');

          const servicosResponse = await fetch(`https://beauty-api-private.onrender.com/salao/${selectedSalonId}/servicos`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (!servicosResponse.ok) {
            throw new Error('Erro ao buscar os serviços do salão');
          }

          const servicosData = await servicosResponse.json();
          setServicos(servicosData);
        } catch (error) {
          console.error('Erro ao buscar serviços:', error);
          Alert.alert('Erro', 'Não foi possível buscar os serviços do salão.');
        } finally {
          setLoadingServicos(false); // Finaliza o carregamento de serviços
        }
      };

      fetchServicos();
    }
  }, [salao]);

  const fetchHorarios = async (servicoId) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const response = await fetch(`https://beauty-api-private.onrender.com/servico/${servicoId}/horarios`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Erro ao buscar os horários');
      }

      const data = await response.json();
      setHorariosSelecionados(data);
      setHorariosVisiveis(true);
    } catch (error) {
      console.error('Erro ao buscar horários:', error);
      Alert.alert('Erro', 'Não foi possível buscar os horários disponíveis.');
    }
  };

  const adicionarFavorito = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const selectedSalonId = await AsyncStorage.getItem('selectedSalonId');

      const response = await fetch('https://beauty-api-private.onrender.com/favoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          salaoId: parseInt(selectedSalonId),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        Alert.alert('Erro', data.message || 'Erro ao adicionar aos favoritos.');
        return;
      }

      setIsFavorito(true);
      Alert.alert('Sucesso', 'Salão adicionado aos favoritos!');
    } catch (error) {
      console.error('Erro ao adicionar salão aos favoritos:', error);
      Alert.alert('Erro', 'Não foi possível adicionar aos favoritos.');
    }
  };

  const confirmarAgendamento = (horario) => {
    Alert.alert(
      "Confirmação de Agendamento",
      `Você deseja agendar ${servicoSelecionado} para ${horario}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Confirmar", onPress: () => realizarAgendamento(horario) },
      ]
    );
  };

  const realizarAgendamento = async (horario) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const servicoId = servicos.find(servico => servico.nome === servicoSelecionado)?.id;

      const response = await fetch('https://beauty-api-private.onrender.com/agendamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          servicoId,
          dataHora: horario,
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao realizar o agendamento');
      }

      Alert.alert('Sucesso', 'Agendamento realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao realizar agendamento:', error);
      Alert.alert('Erro', 'Não foi possível realizar o agendamento.');
    }
  };

  const selecionarServico = (servico) => {
    setServicoSelecionado(servico.nome);
    fetchHorarios(servico.id);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ecf3f3" />
        <Text style={styles.loadingText}>Carregando informações...</Text>
      </View>
    );
  }

  if (!salao) {
    return <Text>Salão não encontrado.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: salao.atendente.foto }} style={styles.logo} />
          <Text style={styles.salaoNome}>{salao.nome}</Text>
          <Pressable onPress={adicionarFavorito} style={styles.favoritoButton}>
            <FontAwesome name={isFavorito ? 'heart' : 'heart-o'} size={40} color="white" />
          </Pressable>
        </View>

        <Text style={styles.nomeAtendente}>{salao.atendente.nome}</Text>
        <Text style={styles.bio}>{salao.atendente.bio}</Text>
        <Text style={styles.endereco}>{salao.endereco}</Text>

        <View style={styles.servicoContainer}>
          <FontAwesome name="scissors" size={20} color="white" />
          <Text style={styles.servico}>Serviços</Text>
        </View>

        {loadingServicos ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ecf3f3" />
            <Text style={styles.loadingText}>Carregando serviços...</Text>
          </View>
        ) : (
          servicos.map((servico, index) => (
            <Pressable key={index} style={styles.servicoItem} onPress={() => selecionarServico(servico)}>
              <Text style={styles.servicoNome}>{servico.nome} - R$ {servico.valor.toFixed(2)}</Text>
              <Text style={styles.servicoDescricao}>{servico.descricao}</Text>
            </Pressable>
          ))
        )}

        {horariosVisiveis && (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Horários disponíveis para {servicoSelecionado}</Text>
            {horariosSelecionados.map((horario, index) => (
              <Pressable key={index} style={styles.button} onPress={() => confirmarAgendamento(horario)}>
                <Text style={styles.horarioTexto}>{horario}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  salaoNome: {
    color: 'white',
    fontWeight: '800',
    fontSize: 30,
    flex: 1,
  },
  favoritoButton: {
    marginLeft: 10,
  },
  nomeAtendente: {
    fontWeight: '800',
    fontSize: 20,
    color: 'white',
  },
  bio: {
    fontWeight: '500',
    color: 'white',
  },
  endereco: {
    fontWeight: '500',
    color: 'white',
    marginBottom: 20,
  },
  servicoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  servico: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20,
    marginLeft: 10,
  },
  servicoItem: {
    backgroundColor: '#006666',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  servicoNome: {
    color: 'white',
    fontSize: 16,
  },
  servicoDescricao: {
    color: 'white',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#006666',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  cardTitulo: {
    color: 'white',
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  horarioTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006666',
  },
});

export default SalaoDetails;
