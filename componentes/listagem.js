import React, { useState } from 'react';
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App({ data }) { // esqueci o {} kkk 
// pedi ajuda para entender o flat list mas ele é basicamente um map então foi tranquilo mas tive ajuda para implementar a imagem na listagem
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.mal_id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              
              <Image
                source={{ uri: item.images.jpg.image_url }}
                style={styles.image}
              />

              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.type}>{item.type}</Text>

            </View>
          )}
        />
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    color: '#fff',
  },
  type: {
    color: '#aaa',
  },
});
