import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fila() {

  const router = useRouter();
  const [meuPedido, setMeuPedido] = useState(null);
  const [fila, setFila] = useState(['#102', '#103', '#104']); 

  const gerarPedido = () => {
    if (meuPedido) return; // impede gerar outro pedido

    const novoCodigo = Math.floor(Math.random() * 900) + 100; 
    const codigoFormatado = `#${novoCodigo}`;
    
    setMeuPedido(codigoFormatado);
    setFila([...fila, codigoFormatado]);
  };

  return (
    <View style={styles.container}>
  
      <Text style={styles.title}>Fila Virtual</Text>

      <View style={styles.cardDestaque}>
        <Text style={styles.label}>Seu Pedido:</Text>
        <Text style={styles.codigoText}>
          {meuPedido ? meuPedido : '---'}
        </Text>

        <Text style={styles.status}>
          {meuPedido 
            ? `Você está na posição ${fila.indexOf(meuPedido) + 1}`
            : 'Gere um pedido abaixo'}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.buttonPrimary,
            meuPedido && { opacity: 0.5 }
          ]} 
          onPress={gerarPedido}
          disabled={!!meuPedido}
        >
          <Text style={styles.buttonText}>
            {meuPedido ? "Pedido já gerado" : "Gerar Novo Pedido"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonSecondary} 
          onPress={() => router.push('/Cardapio')}
        >
          <Text style={styles.buttonTextSecondary}>Ver Cardápio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filaContainer}>
        <Text style={styles.filaTitle}>Fila de Preparo</Text>
        <FlatList
          data={fila}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemFila}>
              <Text style={item === meuPedido ? styles.itemDestaque : styles.itemText}>
                Pedido {item} {item === meuPedido && "(Você)"}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // padrão com o resto do app
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#fff', 
  },
  cardDestaque: {
    backgroundColor: '#070707',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#151515'
  },
  label: {
    fontSize: 16,
    color: '#c0bebe',
  },
  codigoText: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ffffff',
    marginVertical: 10,
  },
  status: {
    fontSize: 14,
    color: '#e6f4fe',
    fontWeight: '600',
  },
  buttonContainer: {
    gap: 10,
    marginBottom: 30,
  },
  buttonPrimary: {
    backgroundColor: '#e6f4fe',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e6f4fe',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: '#e6f4fe',
    fontWeight: 'bold',
    fontSize: 16,
  },
  filaContainer: {
    flex: 1,
  },
  filaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#c0bebe',
  },
  itemFila: {
    padding: 15,
    backgroundColor: '#070707',
    borderBottomWidth: 1,
    borderBottomColor: '#151515',
  },
  itemText: {
    fontSize: 16,
    color: '#c0bebe',
  },
  itemDestaque: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e6f4fe',
  }
});