import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Card from "../Components/Card"

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
        <Card 
          title="Sobre"
          content="Saiba mais sobre nós e nossos serviços."
          textButton="Ir para Sobre"
          OnPress={ () => navigation.navigate('Sobre') }
        />
        <Card
          title="Faq"
          content="Saiba mais Faq"
          textButton="Ir para Faq"
          OnPress={ () => navigation.navigate('Faq') }
        />
    </View>
  )
}