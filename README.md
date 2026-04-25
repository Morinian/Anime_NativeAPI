# 📱 Buscar Anime API - React Native

Aplicativo mobile desenvolvido com React Native utilizando Expo, que permite listar e pesquisar animes consumindo dados de uma API externa.

---

## 🚀 Funcionalidades

* 🔍 Pesquisa de animes por nome
* 📃 Listagem de animes
* 🖼️ Exibição de imagem, título e tipo
* 📦 Consumo de API externa (Jikan API)
* 📱 Interface simples e organizada
* 🔄 Scroll interno dentro de uma caixa fixa

---

## 🧠 Tecnologias utilizadas

* React Native
* Expo
* JavaScript (ES6+)
* API REST (fetch)

---

## 📡 API utilizada

Os dados são consumidos da API:

```
https://api.jikan.moe/v4/anime
```

### Exemplos:

* Listar: `/anime`
* Buscar: `/anime?q=naruto`

---

## 🏗️ Estrutura do projeto

```
📁 projeto
 ┣ 📁 componentes
 ┃ ┗ 📄 listagem.js   # Componente de listagem (FlatList)
 ┣ 📄 App.js          # Tela principal
 ┗ 📄 package.json
```

---

## 🧩 Componentes

### 🔹 App.js

Responsável por:

* Controlar estados (`data`, `pesquisa`)
* Fazer requisições à API
* Renderizar inputs e botões
* Passar os dados para o componente de listagem

### 🔹 listagem.js

Responsável por:

* Renderizar os dados em uma `FlatList`
* Exibir imagem, título e tipo de cada anime
* Scroll interno dentro de uma área fixa

---

## ▶️ Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npx expo start
```

3. Abra no celular usando o app Expo Go ou no navegador

---

