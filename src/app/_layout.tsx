import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="cadastro" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="detalhes" options={{ headerShown: false }} />
      <Stack.Screen name="beauty" options={{ headerShown: false,  title: 'Beauty',}} />
    </Stack>
  );
}
  