import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable, Text, Image, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // Importando o ícone

const atendente = {
  nome: 'Joana Souza',
  bio: 'Especialista em unhas e sobrancelhas',
};

const salao = {
  nome: 'Unhas Perfeitas',
  logo: 'https://picsum.photos/200/300?random=5',
  endereco: 'Shopping Center, 10', // Endereço adicionado
};

const servicos = [
  { 
    nome: 'Tratamento Capilar', 
    descricao: 'Hidratação e recuperação capilar', 
    valor: 200.0, 
    horarios: ["11:00 - 14/10", "12:00 - 14/10", "13:00 - 14/10"]
  },
  { 
    nome: 'Corte de cabelo', 
    descricao: 'Corte masculino e feminino', 
    valor: 50.0, 
    horarios: ["8:00 - 14/10", "9:00 - 14/10", "10:00 - 14/10"] 
  },
  { 
    nome: 'Manicure', 
    descricao: 'Cuidado e embelezamento das unhas', 
    valor: 40.0, 
    horarios: ["8:30 - 14/10", "9:30 - 14/10", "10:30 - 14/10"] 
  },
];

export default function Salao() {
  const [horariosVisiveis, setHorariosVisiveis] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState('');
  const [horariosSelecionados, setHorariosSelecionados] = useState([]);

  const confirmarAgendamento = (horario) => {
    Alert.alert(
      "Confirmação de Agendamento",
      `Você deseja agendar ${servicoSelecionado} para ${horario}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Confirmar", onPress: () => console.log(`Agendamento confirmado: ${servicoSelecionado} - ${horario}`) },
      ]
    );
  };

  const selecionarServico = (servico) => {
    setServicoSelecionado(servico.nome);
    setHorariosSelecionados(servico.horarios);
    setHorariosVisiveis(true);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: salao.logo }} style={styles.logo} />
          <Text style={styles.salaoNome}>{salao.nome}</Text>
        </View>

        <Text style={styles.atendenteNome}>{atendente.nome}</Text>
        <Text style={styles.atendenteBio}>{atendente.bio}</Text>
        <Text style={styles.endereco}>{salao.endereco}</Text> {/* Exibindo o endereço */}

        <View style={styles.servicoContainer}>
          <FontAwesome name="scissors" size={20} color="white" />
          <Text style={styles.servico}>Serviços</Text>
        </View>

        {servicos.map((servico, index) => (
          <Pressable key={index} style={styles.servicoItem} onPress={() => selecionarServico(servico)}>
            <Text style={styles.servicoNome}>{servico.nome} - R$ {servico.valor}</Text>
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
}

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
  atendenteNome: {
    color: 'white',
    fontWeight: '800',
    marginTop: 10,
  },
  atendenteBio: {
    color: 'white',
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
