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
  const [loadingServicos, setLoadingServicos] = useState(true);
  const [loadingHorarios, setLoadingHorarios] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isFavorito, setIsFavorito] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

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

        if (!selectedSalonId || !token) {
          Alert.alert('Erro', 'ID do salão ou token não encontrados.');
          return;
        }

        console.log('Buscando detalhes do salão...');
        const [detalhesResponse, favoritosResponse] = await Promise.all([ 
          fetch(`https://beauty-api-private.onrender.com/salao/${selectedSalonId}`, {
            headers: { 'Authorization': `Bearer ${token}` },
          }),
          fetch('https://beauty-api-private.onrender.com/favoritos', {
            headers: { 'Authorization': `Bearer ${token}` },
          }),
        ]);

        if (!detalhesResponse.ok) throw new Error('Erro ao buscar detalhes do salão');
        const salaoData = await detalhesResponse.json();
        setSalao(salaoData);

        // Verificando se favoritosData é um array válido
        if (favoritosResponse.ok) {
          const favoritosData = await favoritosResponse.json();
          // Garantir que favoritosData é um array antes de chamar .some
          if (Array.isArray(favoritosData)) {
            setIsFavorito(favoritosData.some(f => f.salao?.id === salaoData.id));
          } else {
            setIsFavorito(false); // Se não for array, não é favorito
          }
        }

        fetchServicos(selectedSalonId, token);
      } catch (error) {
        console.error('Erro ao buscar detalhes do salão:', error);
        Alert.alert('Erro', 'Não foi possível carregar os detalhes do salão.');
      } finally {
        setLoading(false);
      }
    };

    fetchSalaoDetails();
  }, []);

  const fetchServicos = async (selectedSalonId, token) => {
    try {
      const cachedServicos = await AsyncStorage.getItem(`servicos_${selectedSalonId}`);
      if (cachedServicos) {
        setServicos(JSON.parse(cachedServicos)); // Usar cache local, se disponível
      }

      console.log('Buscando serviços...');
      const response = await fetch(`https://beauty-api-private.onrender.com/salao/${selectedSalonId}/servicos`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!response.ok) {
        console.log('Erro ao buscar os serviços:', response.statusText);
        setServicos([]);
        return;
      }

      const servicosData = await response.json();
      if (servicosData.length === 0) {
        setServicos([]);
      } else {
        setServicos(servicosData);
        await AsyncStorage.setItem(`servicos_${selectedSalonId}`, JSON.stringify(servicosData));
      }
    } catch (error) {
      console.error('Erro ao buscar serviços:', error);
      setServicos([]);
    } finally {
      setLoadingServicos(false);
    }
  };

  const adicionarFavorito = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const selectedSalonId = await AsyncStorage.getItem('selectedSalonId');

      if (!token || !selectedSalonId) {
        Alert.alert('Erro', 'Token de autenticação ou ID do salão não encontrado.');
        return;
      }

      const response = await fetch('https://beauty-api-private.onrender.com/favoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ salaoId: parseInt(selectedSalonId) }),
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

  const selecionarServico = (servico) => {
    console.log('Servico selecionado:', servico);
    setServicoSelecionado(servico.nome);
    fetchHorarios(servico.id); // Passando o id corretamente para buscar horários
  };

  const fetchHorarios = async (servicoId) => {
    setLoadingHorarios(true);
    setHorariosVisiveis(false); // Esconde os horários enquanto carrega
    try {
      console.log(`Buscando horários para o serviço com ID ${servicoId}...`);
      const token = await AsyncStorage.getItem('authToken');
      const response = await fetch(`https://beauty-api-private.onrender.com/servico/${servicoId}/horarios`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!response.ok) {
        // Verificar se o erro é 404 e mostrar mensagem apropriada
        if (response.status === 404) {
          Alert.alert('Sem horários disponíveis', 'Não há horários disponíveis para este serviço.');
        } else {
          console.error(`Erro ao buscar horários: ${response.status} - ${response.statusText}`);
        }
        throw new Error('Erro ao buscar os horários');
      }

      const data = await response.json();
      console.log('Dados de horários recebidos:', data);

      if (data.length > 0) {
        const horarios = data.filter((horario) => horario.disponivel).map((horario) => horario.dataHora);
        setHorariosSelecionados(horarios);
        setHorariosVisiveis(true);
      } else {
        setHorariosSelecionados([]);
        setHorariosVisiveis(false);
        Alert.alert('Sem horários disponíveis', 'Não há horários disponíveis para este serviço.');
      }
    } catch (error) {
      setHorariosSelecionados([]);
      setHorariosVisiveis(false);
      // Alert já tratado no erro 404
    } finally {
      setLoadingHorarios(false);
    }
  };

  const confirmarAgendamento = (horario) => {
    Alert.alert(
      'Confirmar agendamento',
      `Você deseja agendar para o horário ${new Date(horario).toLocaleString()}?`,
      [
        {
          text: 'Não',
          onPress: () => console.log('Agendamento cancelado'),
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => realizarAgendamento(horario),
        },
      ]
    );
  };

  const realizarAgendamento = async (horario) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const selectedSalonId = await AsyncStorage.getItem('selectedSalonId');
      const servicoId = servicos.find((s) => s.nome === servicoSelecionado)?.id;

      if (!token || !selectedSalonId || !servicoId) {
        Alert.alert('Erro', 'Informações insuficientes para realizar o agendamento.');
        return;
      }

      const response = await fetch('https://beauty-api-private.onrender.com/agendamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          servicoId,
          dataHora: horario,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        Alert.alert('Erro ao agendar', data.message || 'Não foi possível realizar o agendamento.');
        return;
      }

      Alert.alert('Sucesso', 'Agendamento realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao realizar agendamento:', error);
      Alert.alert('Erro', 'Não foi possível realizar o agendamento.');
    }
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
            <FontAwesome name={isFavorito ? 'heart' : 'heart-o'} size={24} color="#f00" />
          </Pressable>
          <Text style={styles.nomeAtendente}>{salao.atendente.nome}</Text>
          <Text style={styles.bio}>{salao.atendente.bio}</Text>
          <Text style={styles.endereco}>{salao.endereco}</Text>
        </View>

        <View style={styles.servicoContainer}>
          <Text style={styles.servico}>Serviços disponíveis:</Text>
        </View>

        {loadingServicos ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ecf3f3" />
            <Text style={styles.loadingText}>Carregando serviços...</Text>
          </View>
        ) : servicos.length === 0 ? (
          <Text style={styles.semServicos}>Nenhum serviço disponível no momento.</Text>
        ) : (
          servicos.map((servico, index) => (
            <Pressable
              key={index}
              style={styles.servicoItem}
              onPress={() => selecionarServico(servico)}
            >
              <Text style={styles.servicoNome}>{servico.nome}</Text>
              <Text style={styles.servicoDescricao}>{servico.descricao}</Text>
            </Pressable>
          ))
        )}

        {horariosVisiveis && loadingHorarios ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ecf3f3" />
            <Text style={styles.loadingText}>Carregando horários...</Text>
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Horários disponíveis:</Text>
            {horariosSelecionados.length > 0 ? (
              horariosSelecionados.map((horario, index) => (
                <Pressable key={index} onPress={() => confirmarAgendamento(horario)}>
                  <Text style={styles.horarioTexto}>{new Date(horario).toLocaleString()}</Text>
                </Pressable>
              ))
            ) : (
              <Text style={styles.semServicos}>Selecione o serviço disponível.</Text>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#004d4d',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    fontSize: 18,
    color: '#333',
  },
  favoritoButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  servicoContainer: {
    marginTop: 20,
  },
  servico: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  semServicos: {
    fontSize: 16,
    color: '#777',
  },
  servicoItem: {
    padding: 15,
    backgroundColor: '#f7f7f7',
    marginBottom: 10,
    borderRadius: 8,
  },
  servicoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  servicoDescricao: {
    fontSize: 14,
    color: '#777',
  },
  salaoNome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  nomeAtendente: {
    fontSize: 16,
    color: '#fff',
  },
  bio: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  endereco: {
    fontSize: 14,
    color: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  card: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  horarioTexto: {
    fontSize: 14,
    color: '#333',
  },
});

export default SalaoDetails;
