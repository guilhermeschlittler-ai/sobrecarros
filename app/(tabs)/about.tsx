import { Text, View, StyleSheet} from "react-native";
import {Link} from 'expo-router';
export default function AboutScreen() {
  return (
  <View style={styles.container}>
       <Text style={styles.text}>Sobre</Text>
       <Link href="/" style={styles.button}>
                Vá para a tela de Inicio
               </Link>
      </View>
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
