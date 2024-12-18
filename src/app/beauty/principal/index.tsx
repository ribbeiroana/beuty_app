import 'react-native-gesture-handler';
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, Text, FlatList, Animated, ActivityIndicator, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';


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
    <FlatList
      data={[
        { type: 'logo', content: null },
        { type: 'header', content: 'Encontre os melhores serviços de beleza ao seu redor' },
        { type: 'services', content: services },
        { type: 'agenda', content: 'Agende um horário pesquisando o serviço mais próximo de você' },
        { type: 'beautyTips', content: beautyTips },
      ]}
      keyExtractor={(item, index) => `${item.type}-${index}`}
      renderItem={({ item }) => {
        if (item.type === 'logo') {
          return (
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
            </View>
          );
        }

        if (item.type === 'header') {
          return (
            <Text style={styles.logoText}>
              {item.content}
            </Text>
          );
        }

        if (item.type === 'services') {
          return (
            <View style={styles.section}>
              <FlatList
                data={item.content}
                keyExtractor={(service) => service.id}
                numColumns={1}
                renderItem={({ item }) => (
                  <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.cardImage} />
                    <Text style={styles.cardPhrase}>{item.phrase}</Text>
                  </View>
                )}
                contentContainerStyle={styles.cardList}
              />
            </View>
          );
        }

        if (item.type === 'agenda') {
          return (
            <View style={styles.section}>
              <Text style={styles.agendaText}>{item.content}</Text>
            </View>
          );
        }

        if (item.type === 'beautyTips') {
          return (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Dicas de Beleza</Text>
              {loading ? (
                <ActivityIndicator size="large" color="#FFFFFF" />
              ) : (
                <FlatList
                  data={item.content}
                  keyExtractor={(tip) => tip.id}
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
          );
        }

        return null;
      }}
      contentContainerStyle={styles.flatListContainer}  
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: '#008584', 
    paddingBottom: 20, 
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40, 
  },
  logo: {
    width: 60,  
    height: 60, 
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 22,  
    fontWeight: '300',  
    color: '#fff',
    marginTop: 20, 
    textAlign: 'center',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '300',  
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  cardImage: {
    width: '100%',  
    height: 250,   
    resizeMode: 'cover',
    borderRadius: 15,  
  },
  cardPhrase: {
    position: 'absolute',  
    bottom: 10,  
    left: 0,
    right: 0,   
    textAlign: 'center',  
    fontSize: 18,
    fontWeight: '300',  
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',  
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  cardList: {
    paddingBottom: 20,
  },
  agendaText: {
    fontSize: 18,
    fontWeight: '300',  
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
  },
  tipsList: {
    paddingBottom: 20,
  },
  tipCard: {
    backgroundColor: '#007B7A',
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
    fontWeight: '300',  
  },
});
