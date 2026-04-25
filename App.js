import React, { useState } from 'react';
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Listagem from './componentes/listagem.js';

export default function App() {
 
  // Aqui não tive problemas já que foi o código que fizemos em aula 
  // use inspecionar como celular 

  const [data, setData] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  async function carregarDesenho(){
    const response = await fetch(`https://api.jikan.moe/v4/anime`);
    const jsonReturn = await response.json();
    setData(jsonReturn.data);
  }

  async function pesquisarDesenho(){
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${pesquisa}`);
    const jsonReturn = await response.json();
    setData(jsonReturn.data);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      <View style={styles.caixaTopo}>

        <Text style={styles.textaoTopo}>Buscar Anime API</Text>  

        <TouchableOpacity onPress={carregarDesenho} style={styles.button}>
          <Text style={styles.textao}> Listar Animes</Text>
        </TouchableOpacity>

        <TextInput 
          style={styles.input}
          onChangeText={setPesquisa}
          value={pesquisa}
          placeholder='Digite o nome do anime'
        />  

         <TouchableOpacity onPress={pesquisarDesenho} style={styles.button}>
          <Text style={styles.textao}> Pesquise </Text>
        </TouchableOpacity>
        
        <View style={styles.caixaLista}>
          <Listagem data={data} />
        </View>

      </View>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D40',
    padding: 20,
  },
  textaoTopo: {
    color: '#C252F2',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
  },
  textao: {
    color: '#0b0d40',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    color: '#C252F2',
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1d22b2',
    color: '#C252F2',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8438a5',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
//  Aqui pedi ajuda para configurar o css da caixa scroll fixa - sofro com front
  caixaLista: {
    height: 550,
    borderWidth: 2,
    borderColor: '#C252F2',
    borderRadius: 10,
    padding: 10,
  },
});
