import { Stack, Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Stack screenOptions={{ }}>
      <Stack.Screen
        name='index'  // Home
        options={{
          title: 'Cadastro',
          // tabBarIcon: ({ focused, size }) => (
          //   <FontAwesome name='' color={'#008584'} size={size} />
          // ),
        }}
      />
    </Stack>

  );
}
