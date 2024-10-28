import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable, Text, Image, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const SalaoDetails = () => {
  const router = useRouter();
  const { id } = router.query || {};
  console.log('ID do salão:', id); // Verificando se o ID está correto

  const [salao, setSalao] = useState(null);
  const [servicos, setServicos] = useState([]);
  const [horariosVisiveis, setHorariosVisiveis] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState('');
  const [horariosSelecionados, setHorariosSelecionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchSalaoDetails = async () => {
      if (!id) return;

      try {
        const token = await AsyncStorage.getItem('authToken');
        console.log('Token:', token); // Verificando o token

        const response = await fetch(`https://beauty-api-private-1.onrender.com/salao/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Erro da API:', errorData);
          throw new Error(errorData.message || 'Erro ao buscar os detalhes do salão');
        }

        const data = await response.json();
        setSalao(data);
        setServicos(data.servicos || []);
      } catch (error) {
        console.error('Erro ao buscar detalhes do salão:', error);
        Alert.alert('Erro', 'Não foi possível buscar os detalhes do salão.');
      } finally {
        setLoading(false);
      }
    };

    fetchSalaoDetails();
  }, [id]);

  const confirmarAgendamento = (horario) => {
    Alert.alert(
      "Confirmação de Agendamento",
      `Você deseja agendar ${servicoSelecionado} para ${horario}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Confirmar", onPress: () => console.log(`Agendamento confirmado: ${servicoSelecionado} - ${horario} para o usuário ${userId}`) },
      ]
    );
  };

  const selecionarServico = (servico) => {
    setServicoSelecionado(servico.nome);
    setHorariosSelecionados(servico.horarios || []);
    setHorariosVisiveis(true);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!salao) {
    return <Text>Salão não encontrado.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: salao.logo }} style={styles.logo} />
          <Text style={styles.salaoNome}>{salao.nome}</Text>
        </View>

        <Text style={styles.endereco}>{salao.endereco}</Text>

        <View style={styles.servicoContainer}>
          <FontAwesome name="scissors" size={20} color="white" />
          <Text style={styles.servico}>Serviços</Text>
        </View>

        {servicos.map((servico, index) => (
          <Pressable key={index} style={styles.servicoItem} onPress={() => selecionarServico(servico)}>
            <Text style={styles.servicoNome}>{servico.nome} - R$ {servico.valor.toFixed(2)}</Text>
            <Text style={styles.servicoDescricao}>{servico.descricao}</Text>
          </Pressable>
        ))}

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  salaoNome: {
    color: 'white',
    fontWeight: '800',
    fontSize: 30,
  },
  endereco: {
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
