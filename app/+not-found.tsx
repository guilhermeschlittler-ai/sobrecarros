import { View, StyleSheet} from "react-native";
import {Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
<>
    <Stack.Screen options={{ title: 'Oops! Não encontrado' }} />
    <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Vá de volta para a tela Inicial!
        </Link>
    </View>
</>
    );
}

const styles = StyleSheet.create({
    container: {  
        flex: 1,
        backgroundColor: '#f00e0e', 
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: '#0fec98'
      },
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
      },
  });
      