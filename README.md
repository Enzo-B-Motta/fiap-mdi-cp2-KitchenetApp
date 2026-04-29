### Nome do Aplicativo
## **KitchenetApp**

### Integrantes do grupo

Nome: Enzo Motta RM: 555372<br>
Nome: Eduardo da Silva RM: 554804<br>
Nome: Guilherme Ulacco RM: 558418<br>
Nome: Matheus Hostim RM: 556517<br>

### Descrição do Problema
O KitchenetApp foi desenvolvido com o objetivo de reduzir o tempo de espera dos clientes em filas para realizar pedidos. Em muitos estabelecimentos, principalmente em horários de pico, as filas podem se tornar longas, causando demora no atendimento e insatisfação dos clientes.

O aplicativo busca facilitar esse processo permitindo que os pedidos sejam organizados digitalmente, tornando o fluxo de atendimento mais rápido e eficiente.

### Operação da FIAP Escolhida
A operação escolhida foi **KitchenNet**.

Essa operação foi escolhida pois possui grande fluxo de alunos em filas, no que acarreta no atraso para as aulas. O KitchenetApp pode ajudar a reduzir essas filas, agilizando o processo de pedidos e melhorando a experiência dos usuários.

### Funcionalidades Implementadas

O aplicativo foi desenvolvido utilizando **React Native com Expo Router**, permitindo navegação entre telas e uma interface simples para o usuário.

As funcionalidades implementadas no aplicativo são:

#### Tela de Login (index.js)

- Campos para **Usuário** e **Senha**
- **Botão de acesso** que direciona o usuário para a tela de fila de espera

<img width="293" height="653" alt="image" src="https://github.com/user-attachments/assets/3e1af2a1-991c-4732-8b09-af79d3780e14" />

<img width="295" height="649" alt="image" src="https://github.com/user-attachments/assets/db856512-4103-44c4-a0a3-79ed2ffd9481" />


---

#### Fila de Espera (Fila.js)

Tela responsável por simular a organização da fila de pedidos dos clientes.

Funcionalidades da tela:

- Exibição de um **código de pedido**
- **Botão para gerar um novo código de pedido**
- **Botão para acessar o cardápio**
- Estrutura de **fila virtual de pedidos** (simulação)

<img width="270" height="599" alt="image" src="https://github.com/user-attachments/assets/00b327f0-4def-400d-bd5e-bdc0f806ee74" />


---

#### Cardápio (Cardapio.js)

Tela que apresenta os itens disponíveis no refeitório.

Funcionalidades da tela:

- Exibição do **nome das comidas**
- Exibição do **preço dos produtos**
- **Botão para voltar para a fila de espera**

<img width="275" height="598" alt="image" src="https://github.com/user-attachments/assets/a7061d06-5c28-46e3-9103-5baed1565988" />

---

### Objetivo do Projeto

O objetivo principal do KitchenetApp é **diminuir as filas de clientes em ambientes de alimentação**, permitindo uma organização digital dos pedidos e tornando o processo de atendimento mais rápido e eficiente.

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** 
- **Expo CLI**

### Passo a Passo

1. **Baixe o projeto**

- Acesse o repositório do projeto no GitHub
- Clique no botão **Code**
- Depois clique em **Download ZIP**
- Extraia a pasta do projeto em seu computador

2. **Abra a pasta do projeto**

Abra a pasta do projeto utilizando um editor de código, como o **VS Code**.

3. **Abra o terminal dentro da pasta do projeto**

No VS Code, você pode abrir o terminal, acessando **Terminal → New Terminal**.

4. **Instale as dependências**

No terminal Bash, execute:

```bash
npm install
```

5. **Inicie o projeto**

Ainda no terminal, execute:

```bash
npx expo start
```

6. **Executar o aplicativo**

Após iniciar o projeto, o **Expo Developer Tools** será aberto no navegador.

Você poderá executar o aplicativo das seguintes formas:

**No emulador:**
- Pressione **a** para abrir no Android Emulator

**No navegador:**
- Pressione **w** para abrir a versão web do aplicativo

### Decisões Técnicas

O projeto foi desenvolvido utilizando **React Native com Expo Router**, com foco em simplicidade e organização básica das telas.

#### Estrutura do Projeto

A aplicação está organizada em arquivos separados para cada tela, seguindo o padrão do Expo Router:

- `index.js` → Tela de Login
- `Fila.js` → Tela de Fila de Espera
- `_layout.js` → Configuração da navegação

Essa separação permite melhor organização do código e facilita futuras manutenções.

#### Hooks Utilizados

- **useState**
  - Utilizado na tela de login para armazenar os dados inseridos pelo usuário (usuário e senha)
  - Permite que os campos de input sejam controlados dinamicamente

#### Navegação

A navegação foi implementada utilizando o **Expo Router**, com estrutura baseada em arquivos.

- O arquivo `_layout.js` define a navegação utilizando o componente `Stack`
- A navegação entre telas é feita com o hook `useRouter`

Fluxo atual:

1. O usuário entra na tela de login (`index.js`)
2. Clicando no botão, ele vai ser redirecionado para a tela de fila (`Fila.js`)

#### Estilização

A estilização foi feita com o **StyleSheet** do React Native, tendo:

- Organização dos estilos
- Separação entre lógica e aparência
- Interface simples e funcional

---

## Funcionalidades Implementadas

### Tela de Cadastro (cadastro.jsx)

Tela responsável pelo registro de novos usuários no aplicativo.

Funcionalidades da tela:

- Campo para **Nome completo**
- Campo para **E-mail**
- Campo para **Senha**
- Campo para **Confirmação de senha**
- Validação de campos obrigatórios
- Validação de formato de e-mail
- Validação de senha mínima (6 caracteres)
- Verificação de correspondência entre senha e confirmação
- Armazenamento dos dados no AsyncStorage

*[PRINT Tela de Cadastro preenchida com validação]*

---

### Tela de Login (login.jsx)

Tela utilizada para autenticação do usuário.

Funcionalidades da tela:

- Campo para **E-mail**
- Campo para **Senha**
- Validação de campos obrigatórios
- Verificação das credenciais com dados armazenados
- Redirecionamento para a aplicação após login bem-sucedido

*[PRINT Tela de Login]*

---

### Persistência de Sessão

- O estado de login do usuário é mantido mesmo após o fechamento do aplicativo
- Os dados são armazenados no AsyncStorage
- Implementação de funcionalidade de logout
- Ao realizar logout, o usuário é redirecionado para a tela de login

*[PRINT Fluxo de login e logout]*

---

### Persistência de Dados do Aplicativo

Além dos dados de autenticação, os dados funcionais do aplicativo também passaram a ser persistidos.

Funcionalidades implementadas:

- Armazenamento de dados no AsyncStorage
- Recuperação dos dados ao iniciar o aplicativo (useEffect)
- Atualização dos dados em operações de inserção e alteração

*[PRIN Código de uso do AsyncStorage]*

---

### Gerenciamento de Estado Global (Context API)

Foram criados contextos para centralizar o gerenciamento de estado da aplicação.

#### AuthContext

Responsável por:

- Armazenar o usuário autenticado
- Função de login
- Função de logout

#### AppDataContext

Responsável por:

- Gerenciamento dos dados do aplicativo (fila, pedidos, etc.)

*[PRINT Código dos Contexts]*

---

### Proteção de Navegação

- Acesso às telas principais é restrito a usuários autenticados
- Usuários não autenticados são redirecionados para a tela de login
- Controle de navegação baseado no estado global

*[PRINT Implementação de proteção de rotas]*

---

### Validação de Formulários

Todos os formulários passaram a possuir validações implementadas diretamente nos campos.

Validações aplicadas:

- Campos obrigatórios não podem ser enviados vazios
- Validação de formato de e-mail
- Senha com mínimo de 6 caracteres
- Confirmação de senha obrigatoriamente igual à senha
- Exibição de mensagens de erro abaixo dos campos
- Bloqueio do envio enquanto houver erros

*[PRINT Exemplo do erro em formulário]*

---

### Melhorias de Interface (UI/UX)

Foram realizadas melhorias visuais em todas as telas existentes.

Ajustes realizados:

- Padronização de espaçamento (padding e margin)
- Organização visual dos elementos
- Aplicação de cores para feedback (erro e sucesso)
- Inclusão de indicadores de carregamento (ActivityIndicator)
- Implementação de estado de lista vazia
- Ajustes para evitar sobreposição do teclado nos formulários

*[PRINT Tela com layout atuializado]*

---

## Diferencial Implementado

### Modo Escuro / Modo Claro

Foi implementado suporte a alternância entre tema claro e escuro.

Características:

- Alternância manual pelo usuário
- Controle de tema via Context API
- Aplicação dinâmica de estilos conforme o tema selecionado

*[PRINT Código]*  
*[PRINT a interface nos dois temas]*

---

## Estrutura do Projeto (Atualizada)

O projeto foi reorganizado para melhor separação de responsabilidades:

### Estrutura de pastas

    meu-app/
    ├── app/
    │   ├── (auth)/
    │   │   ├── login.jsx
    │   │   └── cadastro.jsx
    │   ├── (tabs)/
    │   │   ├── index.jsx
    │   │   └── ...
    │   └── _layout.jsx
    ├── components/
    ├── context/
    │   ├── AuthContext.jsx
    │   └── AppDataContext.jsx
    ├── hooks/
    ├── constants/
    └── assets/

---

## Decisões Técnicas (Checkpoint 2)

- Utilização de **AsyncStorage** para persistência de dados locais
- Implementação de autenticação baseada em dados armazenados localmente
- Uso da **Context API** para gerenciamento de estado global
- Separação de rotas autenticadas e não autenticadas
- Validação de formulários diretamente nos componentes

---

## Demonstração Visual

Add as prints:

- Tela de Login  
- Tela de Cadastro  
- Tela de Fila  
- Tela de Cardápio  
- Tela principal do aplicativo  



Fluxo apresentado:

Cadastro → Login → Uso do aplicativo → Logout

---

## Atualização dos Próximos Passos

Com base na evolução atual, o projeto pode ser expandido com:

- Integração com backend real
- Sistema de pedidos completo
- Histórico de pedidos
- Notificações em tempo real
- Melhorias adicionais na interface
