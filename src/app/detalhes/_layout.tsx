import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Layout() {
  const navigation = useNavigation();  // Para navegar para a tela anterior

  return (
    <Tabs screenOptions={{ headerShown: true, tabBarStyle: { display: 'none' } }}>
      <Tabs.Screen
        name="index"  // Nome da tela
        options={{
          title: 'Salão', // Título do header
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
      {/* Você pode adicionar mais telas, se necessário */}
    </Tabs>
  );
}
