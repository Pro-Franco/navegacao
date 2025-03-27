import { View, Text, Button } from 'react-native';
import { useRouter, Redirect, Link } from 'expo-router';

export default function HomeTab() {
  const router = useRouter();

  function handlePress() {
    router.replace('/');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Página Inicial</Text>
      <Button title="Ir para Dashboard" onPress={handlePress} />
    </View>
  );
}
