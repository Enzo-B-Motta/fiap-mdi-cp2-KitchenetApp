import { useRouter } from 'expo-router';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images.png')} style={styles.imagem}/>

      <View style={styles.container}>
      <Text style={styles.subtitulo}>Usuário</Text>
      <TextInput style={styles.input}/>

      <Text style={styles.subtitulo}>Senha</Text>
      <TextInput style={styles.input}/>
      

      <TouchableOpacity style={styles.btn} onPress={() => router.push('/fila')}>
        <Text style={styles.btnText}>LOGAR</Text>
      </TouchableOpacity>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  subtitulo:{
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 5,
    color:"#c0bebe",
    alignSelf: "flex-start"
  },
  input:{
    borderColor:'#555051',
    borderWidth: 2,
    borderRadius: 2,
    height: 50,
    fontSize: 20,
    paddingHorizontal: 80,
    marginBottom: 20,
    alignSelf: 'flex-start',
    color: "#ffffff",           
    cursorColor: "#ffffff",       
    selectionColor: "#ffffff"
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    borderColor:'#555051',
    borderWidth: 2,
    borderRadius: 2,
    paddingHorizontal: 40,
    height: 40,
    justifyContent: 'center',
    marginTop: 14

  },
  btnText: {
    color: "#837b7b"
  },
  imagem: {
    width: 150,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItens: 'center'
  }
});
