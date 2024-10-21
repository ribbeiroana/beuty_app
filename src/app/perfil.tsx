import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Perfil() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.usuario}>Nome Usuário</Text>
        </View>
        <Text style={styles.tituloHistorico}>Histórico de Agendamento</Text>
        <Image source={require('@/assets/images/designEstrela.png')} />
        <Pressable style={styles.itensAgendados}>
          <View style={styles.itensContainer}>
            <Text style={styles.textoItens}>cabelo - salão - valor</Text>
            <View style={styles.excluirContainer}>
              <Text style={styles.excluirAgendamento}>Excluir</Text>
              <FontAwesome6 name="trash-can" size={20} style={styles.excluirIcon} />
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008584',
    height: '100%',
  },
  card: {
    backgroundColor: '#cccccc',
    height: 80,
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  usuario: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 25,
    color: 'white',
  },
  tituloHistorico: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  itensAgendados: {
    backgroundColor: '#cccccc',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  itensContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoItens: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  excluirContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  excluirAgendamento: {
    color: 'white',
    marginRight: 5, 
  },
  excluirIcon: {
    color: 'white',
  },
});
