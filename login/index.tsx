import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Importando useRouter para navegação

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Inicializando o router

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password123') {
      Alert.alert('Login Successful', 'Welcome back!');
      router.push('/tabs'); // Redirecionar para a tela de tabs após o login
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require('@/assets/images/logo.png')} /> */}

      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={24} color="#008584" />
        <TextInput
          style={styles.input}
          placeholder="Digite seu email..."
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="#008584" />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha..."
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link href="/cadastro"><Text style={styles.registerText}>Ainda não possui uma conta? Cadastre-se</Text></Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008584',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
    height: 50,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#004d4d',
    paddingVertical: 15,
    width:'100%',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
