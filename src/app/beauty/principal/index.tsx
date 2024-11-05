import 'react-native-gesture-handler';
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, FlatList, Animated, ActivityIndicator, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

// Adicionar imagens aos serviços
const services = [
  { id: '1', image: require('@/assets/images/maquiador.jpg'), phrase: 'Transforme seu look com um toque de beleza!' },  
  { id: '2', image: require('@/assets/images/barbeiro.jpg'), phrase: 'Renove seu estilo com um corte de cabelo incrível!' },
  { id: '3', image: require('@/assets/images/cabeleleira.jpg'), phrase: 'Realce sua beleza com um penteado moderno!' },
  { id: '4', image: require('@/assets/images/limpeza.jpg'), phrase: 'Cuide da sua pele, ela é seu maior bem!' },
];

const beautyTips = [
  { id: '1', tip: 'Mantenha a pele hidratada todos os dias.' },
  { id: '2', tip: 'Use protetor solar mesmo em dias nublados.' },
  { id: '3', tip: 'Beba bastante água para manter a pele saudável.' },
  { id: '4', tip: 'Evite dormir de maquiagem.' },
  { id: '5', tip: 'Experimente novos estilos, não tenha medo de mudar!' },
];

export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(true);

  const animateTips = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateTips();
    const loadTips = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar dicas:', error);
        Alert.alert('Erro', 'Não foi possível carregar as dicas de beleza.');
      }
    };

    loadTips();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Logo no canto esquerdo */}
        <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
        
        {/* Texto abaixo da logo com formatação igual ao de "Serviços Populares" */}
        <Text style={styles.logoText}>
          Encontre os melhores serviços de beleza ao seu redor
        </Text>

        {/* Seção de Serviços Populares */}
        <View style={styles.section}>
          <FlatList
            data={services}
            keyExtractor={(item) => item.id}
            numColumns={1}  // Exibir em uma única coluna
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardPhrase}>{item.phrase}</Text>
              </View>
            )}
            contentContainerStyle={styles.cardList}
          />
        </View>

        {/* Texto substituindo o botão de agendamento */}
        <View style={styles.section}>
          <Text style={styles.agendaText}>Agende um horário pesquisando o serviço mais próximo de você</Text>
        </View>

        {/* Seção de Dicas de Beleza */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dicas de Beleza</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : (
            <FlatList
              keyExtractor={(item) => item.id}
              data={beautyTips}
              renderItem={({ item }) => (
                <Animated.View style={[styles.card, { 
                  opacity: fadeAnim, 
                  transform: [{ translateX: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [100, 0] }) }] 
                }]} >
                  <View style={styles.tipCard}>
                    <Text style={styles.tipText}>{item.tip}</Text>
                  </View>
                </Animated.View>
              )}
              contentContainerStyle={styles.tipsList}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008584',
    padding: 16,
    flex: 1,
  },
  logo: {
    width: 60,  // Ajustando o tamanho da logo
    height: 60, // Ajustando o tamanho da logo
    resizeMode: 'contain',
    position: 'absolute',  // Posicionando no canto superior esquerdo
    top: 16,
    left: 16,
  },
  logoText: {
    fontSize: 22,  // Usando o mesmo tamanho de fonte do título de "Serviços Populares"
    fontWeight: '300',  // Fonte fina
    color: '#fff',
    marginTop: 40,  // Espaço abaixo da logo
    textAlign: 'center',  // Centraliza o texto
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '300',  // Fonte fina
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',  // Centraliza o título
  },
  imageContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  cardImage: {
    width: '100%',  // Faz com que a imagem ocupe toda a largura do card
    height: 250,    // Ajuste o tamanho da imagem conforme necessário
    resizeMode: 'cover',
    borderRadius: 15,  // Arredonda as bordas da imagem
  },
  cardPhrase: {
    position: 'absolute',  // Coloca a frase sobre a imagem
    bottom: 10,  // Distância do fundo
    left: 0,
    right: 0,   // Para centralizar no meio
    textAlign: 'center',  // Centraliza o texto
    fontSize: 18,
    fontWeight: '300',  // Torna a fonte mais fina
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',  // Adiciona uma sombra para melhorar a visibilidade
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  cardList: {
    paddingBottom: 20,
  },
  item: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  agendaText: {
    fontSize: 18,
    fontWeight: '300',  // Usando a fonte fina, como solicitado
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
  },
  tipsList: {
    paddingBottom: 20,
  },
  tipCard: {
    backgroundColor: '#008584',
    backgroundImage: 'linear-gradient(160deg, #008584 0%, #caffed 100%)',  // Gradiente de fundo
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  tipText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '300',  // Fonte fina
  },
});
