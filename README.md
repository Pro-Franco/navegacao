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
Arquivos:
AccountTab
Componente que representa a aba de "Conta", onde o usuário pode gerenciar suas informações pessoais.

Dashboard
Componente que exibe o Dashboard do aplicativo, com dados principais, como gráficos e estatísticas.

HomeTab
Componente que representa a aba inicial do aplicativo, exibindo as funcionalidades centrais para o usuário.

OrderTab
Componente que exibe a aba de Pedidos, onde o usuário pode acompanhar seus pedidos realizados.

Profile
Componente que exibe as informações do perfil do usuário, permitindo visualização e edição de dados pessoais.

Settings
Componente que exibe as configurações do aplicativo, como ativar ou desativar notificações.

TabLayout
Componente responsável pela navegação de abas (tabs), que conecta as diferentes telas como Home, Conta e Pedidos.

Layout
Componente de layout geral, incluindo cabeçalho, rodapé e a estrutura básica do app.

Home.js
Tela principal do aplicativo, onde o usuário tem acesso às principais funcionalidades e informações iniciais.

Profile.js
Tela de perfil do usuário, exibindo suas informações pessoais detalhadas e opções de edição.
