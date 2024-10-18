import { ImageBackground, StyleSheet, View, Image, Text, Button, Pressable } from 'react-native'


export interface PaginaProps {
  children: React.ReactNode
}

const background = require('@/assets/images/background.jpg')

export default function InforSalao(props: PaginaProps) {
  return (
    <View style={styles.container}>
      <Image>

      </Image>
      <Text style={styles.salao}>Beleza Pura</Text>
      <Text style={styles.nome}>Ana Silva</Text>
      <Text style={styles.informacoes}>Especialista em corte e coloração</Text>
      <Text style={styles.informacoes}>Rua das Flores, 123</Text>
      <Text style={styles.servico}>Serviços</Text>
      <Text>Corte de cabelo (Corte masculino e feminino) / valor</Text>
      <Pressable>Agendar</Pressable>


      <View style={styles.card}>
        <Text style={styles.cardTitulo} >Horários</Text>
        <Pressable style={styles.button}>8:00 - 10/10 </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    color: 'white',
    backgroundColor: '#008584',
    marginTop: 100,
    width: '100%',
    height: '100%',
    // borderRadius: 50,
    // 0 0 0
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  texto: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.8,
  },
  salao: {
    color: 'white',
    fontWeight: '800',
    fontSize: 30,
    textAlign: 'center',

  },
  nome: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
  },
  informacoes: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
  },
  servico: {
    color: 'white',
    marginTop: 10,
    fontWeight: '800',
    marginLeft: 10,
    fontSize: 20,
  },
  card: {
    backgroundColor: '#006666',
    color: 'white',
    height: 70,
    borderRadius: 30,
  },
  cardTitulo: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    color: '#006666',
    fontWeight: '900',
    fontSize: 17,
    borderRadius: 30,
    width: '20%',
  }

})



