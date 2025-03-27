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

Expo Router é uma ferramenta de navegação projetada para aplicações Expo/React Native, permitindo uma abordagem simplificada com navegação baseada em arquivos. Aqui estão os componentes principais e outras funções de navegação que o Expo Router oferece:

Componentes Principais
app/ (diretório de rotas)
O diretório app/ define as rotas automaticamente com base na estrutura de pastas e arquivos. Não é necessário configurar manualmente as rotas, pois o Expo Router faz isso automaticamente conforme a organização dos arquivos.

Link
O componente Link é utilizado para navegação declarativa, funcionando como uma alternativa ao a no HTML. Ele cria links entre as diferentes telas do aplicativo, permitindo a navegação sem recarregar a página.

useRouter
O hook useRouter permite o acesso ao objeto do roteador, facilitando a navegação programática. Ele oferece funções para manipular o histórico de navegação, como navegar para uma nova rota ou acessar detalhes sobre a navegação atual.

Tabs e Stack
O Expo Router oferece suporte a diferentes tipos de navegação:

Tabs: Permite dividir a navegação em várias seções, como um sistema de abas.

Stack: Utiliza a navegação empilhada, onde cada nova tela é empurrada para o topo da pilha, permitindo voltar à tela anterior.

ErrorBoundary
O ErrorBoundary é usado para capturar e tratar erros na navegação. Se uma navegação falhar, ele exibe uma mensagem de erro amigável para o usuário.

Nested Routing
O Expo Router suporta rotas aninhadas, permitindo criar navegação hierárquica de forma simples, onde uma rota pode conter outras rotas dentro dela, facilitando a organização de layouts e seções do aplicativo.

Outras Funções de Navegação
router.push()
A função router.push() permite navegar para uma nova rota. Ela adiciona a nova rota ao histórico de navegação, permitindo que o usuário volte para a página anterior com o botão "voltar" do dispositivo.

Uso: Navega para a URL especificada e mantém o histórico de navegação.

router.replace()
O método router.replace() permite substituir a rota atual pela nova rota, sem adicionar uma nova entrada ao histórico de navegação. Isso é útil em casos onde você não deseja que o usuário possa voltar à página anterior, como após um login bem-sucedido ou após uma ação que muda o estado do aplicativo.

Uso: Substitui a rota atual, impedindo que o usuário retorne à página anterior.

router.back()
A função router.back() permite que o usuário volte para a tela anterior no histórico de navegação. Isso funciona de maneira semelhante ao botão "voltar" do navegador ou dispositivo.

router.refresh()
A função router.refresh() permite recarregar a tela atual, similar ao botão de recarregar no navegador. Isso é útil para atualizar dados ou forçar uma re-renderização de um componente.

router.prefetch()
A função router.prefetch() é usada para pré-carregar uma rota antes de ser acessada, o que pode melhorar o desempenho ao navegar entre telas.

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
