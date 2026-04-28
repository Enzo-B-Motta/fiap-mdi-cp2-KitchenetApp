import { useRouter } from 'expo-router';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native';

export default function cadastro() {

    const router = useRouter();

    return (
        <View>
            <TextInput
             placeholder="Digite seu nome"
             style= {{ borderWidth: 1, padding: 10, borderRadius: 8 }}
            />
            <TextInput
             placeholder="Digite seu Email"
             style= {{ borderWidth: 1, padding: 10, borderRadius: 8 }}
            />
            <TextInput
             placeholder="Digite sua Senha"
             style= {{ borderWidth: 1, padding: 10, borderRadius: 8 }}
            />
            <TextInput
             placeholder="Confirme sua Senha"
             style= {{ borderWidth: 1, padding: 10, borderRadius: 8 }}
            />
            
        </View>
    );

    
}