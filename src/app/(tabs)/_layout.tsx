import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bar-chart" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Conta',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
