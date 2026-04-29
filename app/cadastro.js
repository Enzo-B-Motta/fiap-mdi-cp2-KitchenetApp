import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { cadastrar } = useAuth();
  const router = useRouter();

  async function handleCadastro() {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Atenção', 'E-mail inválido!');
      return;
    }
    if (senha.length < 6) {
      Alert.alert('Atenção', 'Senha deve ter no mínimo 6 caracteres!');
      return;
    }


    await cadastrar(nome.trim(), email.trim(), senha);
    Alert.alert('Sucesso!', 'Conta criada com sucesso!', [
    { text: 'Ir para Login', onPress: () => router.replace('/') },
    ]);
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.titulo}>Criar Conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#555"
          value={nome}
          onChangeText={setNome}
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha (mín. 6 caracteres)"
          placeholderTextColor="#555"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity style={styles.botao} onPress={handleCadastro} activeOpacity={0.8}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Text style={styles.link}>Já tenho conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: '#000000' },
  container: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 50, textAlign: 'center', color: '#e0d8d8' },
  input: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#555051',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#555051',
  },
  botao: { backgroundColor: '#ffffff', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 , borderColor:'#555051'},
  textoBotao: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  link: { marginTop: 16, textAlign: 'center', color: '#ffffff', fontSize: 14 , textDecorationLine: 'underline',},
});