import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="cadastro/index" options={{ headerShown: false }} />
      <Stack.Screen name="tabs/_layout" options={{ headerShown: false,  title: 'Beuty',}} />
    </Stack>
  );
}
