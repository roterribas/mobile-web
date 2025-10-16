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
          textButton="Sobre"
          OnPress={ () => navigation.navigate('Sobre') }
        />
        <Card
          title="Faq"
          content="FAQ"
          textButton="FAQ"
          OnPress={ () => navigation.navigate('Faq') }
        />
    </View>
  )
}