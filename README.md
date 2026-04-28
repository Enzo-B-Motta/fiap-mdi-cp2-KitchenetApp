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

<img width="281" height="599" alt="image" src="https://github.com/user-attachments/assets/26bd790f-b156-4a03-9d2b-cc106a1f2a60" />


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

### Próximos Passos

Com mais tempo, o grupo pretende evoluir o aplicativo com:

- Implementação completa da tela de fila de pedidos
- Criação da tela de cardápio funcional
- Integração entre pedidos e fila
- Melhoria da interface visual
- Adição de feedbacks ao usuário (mensagens e estados de carregamento)

Com essas melhorias o aplicativo seria aperfeiçoado, estando mais completo e mais próximo de um cenário real no mercado
