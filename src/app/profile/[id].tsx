import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Profile() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>👤 Perfil</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}