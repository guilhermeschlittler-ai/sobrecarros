import { useState } from 'react';

interface Endereco {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function useBuscaCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<Endereco>({
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
  });

  async function buscarCEP() {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await response.json();

      setEndereco(dados);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  }

  return {
    cep,
    setCep,
    endereco,
    buscarCEP,
  };
}