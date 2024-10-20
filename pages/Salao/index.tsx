import {ImageBackground, View, ScrollView, StyleSheet, Pressable, Text, Image } from 'react-native';
// import FotosSalao from '../../components/FotosSalao';
// import InforSalao from '../../components/InforSalao';
import Menu from '../../components/Menu';

const background = require('@/assets/images/background.jpg')

export default function Salao() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerUm}>
      <ImageBackground
              source={background}
              resizeMode="cover"
              style={styles.image}
              imageStyle={{ opacity: 0.4 }}
          >
              {/* {props.children} */}
          </ImageBackground>
        {/* <InforSalao /> */}
        <View style={styles.containerDois}>
      <View style={styles.header}>
        <Image 
          source={require('@/assets/images/react-logo.png')} // Altere o caminho para a sua imagem
          style={styles.profileImage}
        />
        <Text style={styles.salao}>Beleza Pura</Text>
      </View>
      <Text style={styles.nome}>Ana Silva</Text>
      <Text style={styles.informacoes}>Especialista em corte e coloração</Text>
      <Text style={styles.informacoes}>Rua das Flores, 123</Text>
      <Text style={styles.servico}>Serviços</Text>
      <Text style={styles.servicoItens}>Corte de cabelo (Corte masculino e feminino) / valor</Text>
      <Text style={styles.servicoItens}>Corte de cabelo (Corte masculino e feminino) / valor</Text>
      <Text style={styles.servicoItens}>Corte de cabelo (Corte masculino e feminino) / valor</Text>
      <Text style={styles.servicoItens}>Corte de cabelo (Corte masculino e feminino) / valor</Text>

      <Text style={styles.cardTitulo}>Horários</Text>
      <View style={styles.card}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}><Text>8:00 - 14/10</Text></Pressable>
          <Pressable style={styles.button}><Text>8:00 - 14/10</Text></Pressable>
          <Pressable style={styles.button}><Text>8:00 - 14/10</Text></Pressable>
          <Pressable style={styles.button}><Text>8:00 - 14/10</Text></Pressable>
        </View>
      </View>
    </View>
        <Menu  />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  containerUm: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
  },
  image: {
      flex: 1,
      width: '100%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
  },
  containerDois: {
    color: 'white',
    backgroundColor: '#008584',
    width: '100%',
    height: '90%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Alinha a imagem no topo
    marginBottom: 10, // Espaço abaixo do cabeçalho
  },
  profileImage: {
    width: 50, // Defina a largura da imagem
    height: 50, // Defina a altura da imagem
    marginRight: 10, // Espaço entre a imagem e o texto
    marginTop: -10, // Ajuste para que a imagem "saia" para cima
  },
  salao: {
    color: 'white',
    fontWeight: '800',
    fontSize: 30,
    textAlign: 'left', // Alinha o texto à esquerda
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
    marginTop: 25,
    fontWeight: '800',
    marginLeft: 10,
    fontSize: 20,
  },
  servicoItens: {
    color: 'white',
    marginLeft: 10,
    marginTop: 15,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#006666',
    color: 'white',
    padding: 10,
    margin: 10,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  cardTitulo: {
    marginTop: 30,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#006666',
    fontWeight: '900',
    fontSize: 17,
    width: '20%',
    padding: 10,
    margin: 7,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonHover: {
    backgroundColor: '#f0f0f0', // Cor ao passar o mouse (ou pressionar)
    // Você pode adicionar outras propriedades de estilo para o hover aqui
  },
})