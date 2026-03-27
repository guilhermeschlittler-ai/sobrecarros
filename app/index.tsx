import { Text, View, StyleSheet} from "react-native";
import {Link} from 'expo-router';
export default function Index() {
  return (
  <View style={styles.container}>
       <Text style={styles.text}>Tela de Inicio</Text>
        <Link href="/about" style={styles.button}>
         Vá para a tela Sobre
        </Link>
      </View>
  );

}
  const styles = StyleSheet.create({
    container: {  
        flex: 1,
        backgroundColor: '#cecb0f', 
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: '#3a15c0'
      },
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
      },
  });
