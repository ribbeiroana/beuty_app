import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Link } from 'expo-router';
export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (nome && email && senha) {
      Alert.alert('Cadastro Concluído', 'Seja bem-vindo ao Beauty!');
    } else {
      Alert.alert('Erro no Cadastro', 'Por favor, preencha todos os campos.');
    }
  };

  const handleEsqueceuSenha = () => {

    Alert.alert('Recuperação de Senha', 'A lógica de recuperação de senha será implementada.');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/images/logo.png')} />

      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#008584" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#008584" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#008584" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEsqueceuSenha} style={styles.linkContainer}>
      <Link href="/login"><Text style={styles.linkText}>já possui uma conta? faça login.</Text></Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#008584',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#004d4d',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});