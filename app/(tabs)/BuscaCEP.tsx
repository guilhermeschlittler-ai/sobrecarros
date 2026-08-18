import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBuscaCep } from '@/hooks/UseBuscaCep';

export default function BuscaCep() {
  const { cep, setCep, endereco, buscarCep } = useBuscaCep();

  return (
    <View style={styles.container}>
      <Text>Consulte seu CEP</Text>

      <TextInput
        style={styles.textInput}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        keyboardType="numeric"
      />

      <Text>{cep}</Text>

      <Button
        title="Buscar"
        onPress={buscarCep}
      />

      {endereco.logradouro !== '' && (
        <View style={styles.result}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 10,
  },
  result: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
});