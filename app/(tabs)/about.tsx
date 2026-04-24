import { Text, View, StyleSheet} from "react-native";
import {Link} from 'expo-router';
export default function AboutScreen() {
  return (
  <View style={styles.container}>
       <Text style={styles.text}>
        Meu nome é Guilherme Domingues Schlittler, tenho 17 anos e sou um entusiasta de carros. Desde pequeno, sempre fui fascinado por veículos e tudo relacionado a eles. Adoro aprender sobre diferentes modelos, suas características e histórias. Além disso, gosto de acompanhar as últimas novidades do mundo automotivo e sonhar com o dia em que poderei ter meu próprio carro.
       </Text>     
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
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#fff',
      },
  });
