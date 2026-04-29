import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
import React, { useState } from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { login } = useAuth();
  const router = useRouter();

  async function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Preencha e-mail e senha!');
      return;
    }

    const sucesso = await login(email.trim(), senha);

    if (sucesso) {
      router.replace('/fila');
    } else {
      Alert.alert('Erro', 'E-mail ou senha incorretos!');
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Image source={require('../assets/images.png')} style={styles.imagem} />


        <View style={styles.formContent}> 
          <Text style={styles.subtitulo}>Email</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={setEmail}
            value={email}
            placeholder="Digite seu Email" 
            keyboardType="email-address"
            placeholderTextColor="#555"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.subtitulo}>Senha</Text>
          <TextInput 
            style={styles.input} 
            secureTextEntry={true} // Para esconder a senha
            onChangeText={setSenha}
            value={senha}
            placeholder="Digite sua senha"
            placeholderTextColor="#555"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TouchableOpacity style={styles.btn} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.btnText}>LOGAR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/cadastro')} activeOpacity={0.7}>
            <Text style={styles.link}>Não tenho conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Espaçamento nas bordas da tela
  },
  link: {
    marginTop: 16, 
    textAlign: 'center', 
    color: '#ffffff', 
    textDecorationLine: 'underline',
    fontSize: 14 
  },
  flex: { flex: 1, backgroundColor: '#f5f5f5' },
  formContent: {
    width: '100%', // Faz o conteúdo ocupar a largura disponível
    maxWidth: 400, // Limita a largura em telas grandes (Web)
    alignItems: 'center',
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 5,
    color: "#c0bebe",
    alignSelf: "flex-start" // Alinha o texto do label à esquerda
  },
  input: {
    borderColor: '#555051',
    borderWidth: 2,
    borderRadius: 8, // Borda levemente arredondada fica mais moderno
    height: 50,
    width: '100%', // Ocupa toda a largura do formContent
    fontSize: 18,
    paddingHorizontal: 15, // REDUZIDO: agora o texto começa perto da borda
    marginBottom: 20,
    color: "#ffffff",
  },
  btn: {
    borderColor: '#555051',
    borderWidth: 2,
    borderRadius: 8,
    width: '100%', // Botão da mesma largura que o input
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14
  },
  btnText: {
    color: "#ffffff",
    fontWeight: 'bold',
    letterSpacing: 1
  },
  imagem: {
    width: 200,
    height: 100,
    marginBottom: 40, // Espaço entre logo e formulário
    resizeMode: 'contain'
  }
});
