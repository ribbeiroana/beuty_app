import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Layout() {
  const navigation = useNavigation();  

  return (
    <Stack>
      <Stack.Screen
        name="index"  
        options={{
          title: 'Cadastro', 
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
