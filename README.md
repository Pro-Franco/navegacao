# Bem vindo ao projeto Navegação👋

## Objetivo: Demonstrar a negação entre telas usando expo-router e React-Native

## Inicar o projeto siga as intruções a seguir

1. Instalar as dependencias de projeto

   ```bash
   npm install
   ```

2. Executar o aplicativo

   ```bash
    npx expo start
   ```

# 📌 Documentação do Projeto

# Estrutura de Pastas do Projeto

Abaixo está a estrutura de pastas recomendada para o projeto, incluindo a explicação de cada pasta e arquivo.

````plaintext
project-root/
├── src/app/
│   ├── (stack)
│       ├── dashboard
        ├── settings
│   ├── (tabs)
│       ├── _layout
│       ├── account
│       ├── home
│       ├── order
│   ├── profile
│       ├── [id]
│   ├── _layout
│   └── index
├── screens/
│   ├── Home.js
│   └── Profile.js
└── App.json


## 📑 Índice
1. [Introdução](#introducao)
2. [Dashboard.js](#dashboard)
3. [Settings.js](#settings)
4. [TabLayout.js](#tablayout)
5. [AccountTab.js](#accounttab)
6. [HomeTab.js](#hometab)
7. [OrderTab.js](#ordertab)
8. [Profile.js](#profile)
9. [Layout.js](#layout)
10. [Home.js](#home)

---

## 📌 Introdução {#introducao}
Este documento contém a documentação detalhada dos arquivos principais do projeto, explicando suas funções e estrutura. O objetivo é ajudar iniciantes a entender como o código funciona e como ele se organiza dentro do aplicativo.

---

## 📂 Dashboard.js {#dashboard}
**Descrição:** Tela do **Dashboard**, onde são exibidos os principais dados do app.

### 🔹 Código e Explicação
```ts
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

// Componente de Dashboard
export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>📊 Dashboard</Text>
      <Button
        title="Ir para Home (Tabs)"
        onPress={() => router.replace('/(tabs)/home')}  // Navega para a tela "home"
      />
      <Button
        title="Ir para o Perfil (com ID)"
        onPress={() => router.push('/profile/123')}  // Navega para a tela de perfil com ID 123
      />
    </View>
  );
}


---

### **Settings.js**
```markdown
## 📂 Settings.js

**Descrição:** Tela de **Configurações**, onde o usuário pode ajustar preferências e opções do aplicativo.

### 🔹 Código e Explicação
```js
import { View, Text, Switch } from 'react-native';
import { useState } from 'react';

// Componente de Configurações
export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>⚙️ Configurações</Text>
      <Text>Ativar Notificações:</Text>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
      />
    </View>
  );
}



---

### **TabLayout.js**
```markdown
## 📂 TabLayout.js

**Descrição:** Componente responsável pela estrutura de navegação de abas (Tabs).

### 🔹 Código e Explicação
```js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import AccountTab from './AccountTab';
import OrderTab from './OrderTab';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Account" component={AccountTab} />
      <Tab.Screen name="Orders" component={OrderTab} />
    </Tab.Navigator>
  );
}


---

### **TabLayout.js**
```markdown
## 📂 TabLayout.js

**Descrição:** Componente responsável pela estrutura de navegação de abas (Tabs).

### 🔹 Código e Explicação
```js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import AccountTab from './AccountTab';
import OrderTab from './OrderTab';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Account" component={AccountTab} />
      <Tab.Screen name="Orders" component={OrderTab} />
    </Tab.Navigator>
  );
}


---

### **AccountTab.js**
```markdown
## 📂 AccountTab.js

**Descrição:** Aba **Conta**, onde o usuário pode gerenciar suas informações pessoais.

### 🔹 Código e Explicação
```js
import { View, Text } from 'react-native';

// Componente da Aba de Conta
export default function AccountTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>👤 Conta</Text>
      <Text>Detalhes da conta do usuário.</Text>
    </View>
  );
}


---

### **HomeTab.js**
```markdown
## 📂 HomeTab.js

**Descrição:** Aba **Home**, onde são exibidos os dados principais do usuário.

### 🔹 Código e Explicação
```js
import { View, Text } from 'react-native';

// Componente da Aba Home
export default function HomeTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>🏠 Home</Text>
      <Text>Bem-vindo à sua página inicial.</Text>
    </View>
  );
}



---

### **OrderTab.js**
```markdown
## 📂 OrderTab.js

**Descrição:** Aba **Pedidos**, onde são exibidos os pedidos realizados pelo usuário.

### 🔹 Código e Explicação
```js
import { View, Text } from 'react-native';

// Componente da Aba de Pedidos
export default function OrderTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>🛍️ Pedidos</Text>
      <Text>Seus pedidos recentes aparecerão aqui.</Text>
    </View>
  );
}



---

### **Profile.js**
```markdown
## 📂 Profile.js

**Descrição:** Tela de **Perfil**, onde são exibidas as informações detalhadas do usuário.

### 🔹 Código e Explicação
```js
import { View, Text } from 'react-native';

// Componente de Perfil
export default function Profile({ id }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>👤 Perfil</Text>
      <Text>Perfil do usuário com ID: {id}</Text>
    </View>
  );
}


---

### **Layout.js**
```markdown
## 📂 Layout.js

**Descrição:** Componente de **Layout** geral, que define a estrutura do app, incluindo cabeçalho e rodapé.

### 🔹 Código e Explicação
```js
import { View, Text } from 'react-native';

// Componente de Layout
export default function Layout({ children }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, padding: 10 }}>📱 Layout Principal</Text>
      {children}
    </View>
  );
}


---

### **Home.js**
```markdown
## 📂 Home.js

**Descrição:** Tela de **Home**, onde são apresentados os dados principais de acesso.

### 🔹 Código e Explicação
```js
import { View, Text } from 'react-native';

// Componente de Home
export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>🏠 Página Inicial</Text>
      <Text>Bem-vindo ao aplicativo!</Text>
    </View>
  );
}
````
