import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(stack)/dashboard"
        options={{
          title: 'Dashboard',
          headerShown: true
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(stack)/settings"
        options={{ title: 'Configurações' }}
      />

      <Stack.Screen
        name="profile/[id]"
        options={{ title: 'Perfil', headerShown: true }}
      />
    </Stack>
  );
}
