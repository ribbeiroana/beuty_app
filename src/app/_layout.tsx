import { Stack, Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false
    }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'index',
          tabBarIcon: ({ focused, color, size }) => {

            if (focused) {
              return <FontAwesome name='home' color={'#008584'} size={size} />
            }
            return <FontAwesome name='home' color={'#008584'} size={size} />

          }
        }}
      />

      <Tabs.Screen name='pesquisa' options={{ title: 'Pesquisa',
        tabBarIcon: ({ focused, color, size }) => {

          if (focused) {
            return <FontAwesome name='search' color={'#008584'} size={size} />
          }
          return <FontAwesome name='search' color={'#008584'} size={size} />

        }
       }} />
       

      <Tabs.Screen name='perfil' options={{ title: 'Perfil',
        tabBarIcon: ({ focused, color, size }) => {

          if (focused) {
            return <FontAwesome name='user' color={'#008584'} size={size} />
          }
          return <FontAwesome name='user' color={'#008584'} size={size} />

        }
       }} />

    </Tabs>
  )
}
// name='index' nome do arquivo