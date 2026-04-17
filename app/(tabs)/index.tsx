import { Text, View, StyleSheet} from "react-native";
import {Link} from 'expo-router';
export default function Index() {
  return (
  <View style={styles.container}>
       <Text style={styles.text}>Carros são veículos motorizados utilizados principalmente para o transporte de pessoas, geralmente com quatro rodas e conduzidos por um motorista. Eles podem ser movidos por motores a combustão, que utilizam gasolina, etanol ou diesel, ou por motores elétricos, que funcionam com baterias recarregáveis, além dos modelos híbridos que combinam ambas as tecnologias. Entre suas principais características estão a potência do motor, o consumo de combustível, o tipo de transmissão (manual ou automática) e os sistemas de segurança, como freios ABS, airbags e controle de estabilidade. Os carros apresentam diferentes tipos de design, como hatch, sedã, SUV e picape, cada um atendendo a necessidades específicas. Além disso, os modelos modernos contam com tecnologias avançadas, incluindo sensores, conectividade com smartphones e assistentes de direção, tornando-os mais seguros, confortáveis e eficientes para o uso no dia a dia.
</Text>
        
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
