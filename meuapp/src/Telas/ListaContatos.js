import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

export default function ListaContatos() {
  const [Contatos, setContatos] = useState([]);

  // função para buscar contatos do servidor
  const listaConttatos = () => {
    axios
          .get("http://10.0.2.2:3000/contatos")
          .then((respostas) => {
            setContatos(resposta.data)
          })
          .catch((error) => {
            console.error("ERRO AO BUSCAR CONTATO", error);
          })
  }

  // use o useEffect para buscar dados
  useEffect(() => {

  }, [])

  return (
    <View>
        <Text>Lista Contatos</Text>
    </View>
  )
}
