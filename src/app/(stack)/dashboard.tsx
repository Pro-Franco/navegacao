import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Dashboard</Text>
      <Button
        title="Ir para Home (Tabs)"
        onPress={() => router.replace('/(tabs)/home')}
      />

      <Button
        title="Ir para o Perfil (com ID)"
        onPress={() => router.push('/profile/123')}
      />
    </View>
  );
}
